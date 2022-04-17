const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const { Usuario, Recuperar, Sequelize, sequelize } = require('../models/index');
const emailer = require('../libs/emailer');
const Op = Sequelize.Op;

exports.signUp = async (req, res) => {
    try {
        const user = await Usuario.findOne({ where: { correo: req.body.correo } });

        if (user == null) {
            let password = bcrypt.hashSync(req.body.clave, 10);

            // Creamos el usuario
            const newUser = await Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fechanaci: req.body.fechanaci,
                correo: req.body.correo,
                clave: password
            });
            const { clave, estado, ...usr } = newUser.dataValues;
            res.json({
                status: true,
                user: usr
            });
        } else {
            res.json({
                status: false,
                message: `Existe un usuario registrado con la cuenta de correo: ${req.body.correo}`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.signIn = async (req, res) => {
    const { correo, clave } = req.body;
    try {
        // Buscar usuario
        const user = await Usuario.findOne({
            where: {
                correo: correo
            },
        });

        if (!user) {
            res.json({
                status: false,
                mensaje: "Usuario no registrado"
            });
        } else {
            if (bcrypt.compareSync(clave, user.clave)) {
                const { clave, estado, ...usr } = user.dataValues;

                // Creamos el token
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ user: usr },
                    SECRET_KEY, {
                    expiresIn: expiresIn
                });

                res.json({
                    status: true,
                    user: usr,
                    token: accessToken
                });
            } else {
                res.json({
                    status: false,
                    mensaje: "Contraseña incorrecta"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }

}

exports.forgotPassword = async (req, res) => {
    try {
        const { correo } = req.body;

        const user = await Usuario.findOne({
            where: {
                correo: correo
            }
        });

        if (!user) {
            res.json({
                status: false,
                message: "Usuario no registrado"
            });
        } else {
            const codigo = generarCode();
            const tiempoExpiracion = fechaExpiracion();
            const mensaje = "Cambio de contraseña";

            const body = `
                <h4>Saludos Cordiales</h4>
                <p>Hola 🖐 usted ha solicitado cambiar la contraseña debido a que olvidó su contraseña anterior.</p>
                <p>Por favor ingrese el siguiente código que solicita la aplicación: <b>${codigo}</b> </p>
                <p>El tiempo de duración del código es: <b>${tiempoExpiracion}</b></p>
            `;

            await emailer.sendMail(user, mensaje, body);
            await Recuperar.create({
                userId: user.userId,
                codigo: codigo,
                tiempo_expiracion: tiempoExpiracion,
            });
            res.json({
                status: true,
                message: "Se ha enviado un código de verficación a su correo"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { correo, clave, codigo, tiempo_expiracion } = req.body;
        const user = await Usuario.findOne({
            where: {
                correo: correo
            }
        });

        if (!user) {
            res.json({
                status: false,
                message: "Usuario no registrado"
            });
        } else {
            //console.log(user.toJSON().userId)
            const userLog = await Recuperar.findOne({
                include: {
                    model: Usuario,
                    as: 'usuario',
                    where: { userId: user.toJSON().userId },
                },
                where: {
                    codigo: codigo,
                    tiempo_expiracion: {
                        [Op.and]: {
                            [Op.gte]: tiempo_expiracion,
                            [Op.lte]: Sequelize.col('Recuperar.tiempo_expiracion')
                        }
                    },
                    estado: 'I'
                },
            });
            if (!userLog) {
                res.json({
                    status: false,
                    message: "Código de verificación invalido"
                });
            } else {
                let password = bcrypt.hashSync(clave, 10);
                user.clave = password;
                await user.save();

                userLog.estado = 'A';
                await userLog.save();
                
                res.json({
                    status: true,
                    message: "Su contraseña ha sido actualizada"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const fechaExpiracion = () => {
    const fecha = new Date();
    const sumarsesion = 15;
    fecha.setMinutes(fecha.getMinutes() + sumarsesion);
    return `${fecha.toLocaleDateString('en-CA')} ${fecha.toLocaleTimeString()}`;
}

const generarCode = () => {
    const configuracion = {
        caracteres: 6,
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    const caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    let caracteresFinales = '';
    let codigo = '';

    for (propiedad in configuracion) {
        if (configuracion[propiedad] == true) {
            caracteresFinales += caracteres[propiedad] + ' ';
        }
    }

    caracteresFinales = caracteresFinales.trim();
    caracteresFinales = caracteresFinales.split(' ');

    for (let i = 0; i < configuracion.caracteres; i++) {
        codigo += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }

    return codigo;
}