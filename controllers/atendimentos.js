//configurando a rota
module.exports = app=>{

//Requisição (me enviaram) Resposta (eu devolvi)
app.get('/atendimentos', (req,res)=> res.send('Você está na rota de atendimentos no GET'))

}