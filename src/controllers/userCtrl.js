const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const { Usuario } = require('../models/index');
const emailer = require('../libs/emailer');

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
            }
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
            res.status(404).json({
                status: false,
                mensaje: "Usuario no registrado"
            });
        } else {        
            const codigo = generarCode();
            const tiempoExpiracion = fechaExpiracion();
            const mensaje = "Cambio de contraseña";
                
            const body = `
                <h4>Saludos Cordiales</h4>
                <p>Hola 🖐 usted ha solicitado cambiar la contraseña debido a que perdió su contraseña anterior.</p>
                <p>Por favor ingrese el siguiente código que solicita la aplicación: <b>${codigo}</b> </p>
                <p>El tiempo de duración del código es: <b>${tiempoExpiracion}</b></p>
            `;
                
            await emailer.sendMail(user, mensaje, body);
            
            res.json({
                status: true,
                mensaje: "Se ha enviado un código de verficación a su correo"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.resetPassword = (req, res) => {
    Usuario.findOne({
        where: {
            correo: correo
        }
    }).then(user => {
        if (!user) {
            res.status(404).json({
                status: false,
                mensaje: "Usuario no registrado"
            });
        } else {
            Usuario.update({
                clave: req.body.clave
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
    }).catch(err => {
        res.status(500).json(err);
    });
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

    for(propiedad in configuracion){
        if (configuracion[propiedad] == true){
            caracteresFinales += caracteres[propiedad] + ' ';
        }
    }

    caracteresFinales = caracteresFinales.trim();
    caracteresFinales = caracteresFinales.split(' ');

    for(let i = 0; i < configuracion.caracteres; i++){
        codigo += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }

    return codigo;
}