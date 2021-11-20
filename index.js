const customExpress = require('./config/customExpress')

const app = customExpress()
//Identificando a rota e testando
app.listen(3000, () => console.log('Servidor rodando'))

