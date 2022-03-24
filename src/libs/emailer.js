const nodemailer = require('nodemailer');

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'torres.gilson99@gmail.com', 
            pass: 'arinaxdwzopforaz', 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    return transport;
}

const sendMail = async (user, asunto, body) => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: '"SECL" <soporte@secl.com>', // sender address
        to: user.correo, // list of receivers
        subject: asunto, // Subject line
        html: body, // html body
    });
    console.log("Message sent: %s", info.messageId);
}

exports.sendMail = (user, asunto, body) => sendMail(user, asunto, body);