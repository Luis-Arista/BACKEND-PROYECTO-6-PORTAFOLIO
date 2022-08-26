const express = require('express');
const cors = require('cors')
const { mail } = require('./mail/nodemailer')

const app = express();

app.use( cors() );
app.use( express.json() );

app.post( '/contacto' , async(req , res) => {
    
    const { nombre } = req.body
    const { email } = req.body
    const { mensaje } = req.body

    mail(nombre , email , mensaje)

   res.send({
    mensaje:'Correo enviado'
   })
})

app.use( '/' , (req , res) => {
    res.status(200).send({
        Mensaje: 'Listo'
    })
})

module.exports = app