const nodemailer = require('nodemailer')
require('dotenv').config()


let transporter = nodemailer.createTransport({
    host: process.env.HOST ,
    port: process.env.MAIL_PORT ,
    secure: true,
    auth: {
        user: process.env.USER ,
        pass:  process.env.PASS
    }
})


const mail = ( nombre , email , mensaje ) => {
    transporter.sendMail({

        from: `"Ghosty 👻" ${process.env.MAIL}`, // sender address
        to: "larista93@hotmail.com", // list of receivers 
        subject: 'Nuevo cliente desde tu portafolio',
        html: `
        <h1 style='text-align: center; padding: 15px;'>Parece que alguien esta interesado en una web 👻 </h1>
        <p>Hola mi nombre es: <b>${nombre}</b> y mi correo es <b>${email}</b></p>
        <p style='padding: 15px;' >${mensaje}</p>

        `
       
       }, (error) => console.log(error.message))
}

module.exports = {mail}