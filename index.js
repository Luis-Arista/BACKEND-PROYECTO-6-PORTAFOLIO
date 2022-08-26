const app = require('./src/app')
require('dotenv').config()

const PORT = process.env.PORT

const init = async() => {
    await app.listen(PORT);
    console.log(`Servidor levantado y funcionando en puerto ${PORT}`)
    console.log('Listo para usar :)')
};

init()