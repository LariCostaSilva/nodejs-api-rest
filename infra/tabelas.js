//inicializando as tabelas
class Tabelas {
    init(conexao) {
        //utilizar a conexao nos métodos que forem criados
        this.conexao = conexao

        //chamando a criaçao de tabelas 
        this.criarAtendimentos()
    }

    criarAtendimentos() {
        //espera uma query e uma função para executar
        //IF NOT EXISTS é para saber que não precisa criar a tabela se ela já existir
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){ 
                console.log(erro)
            }
            else{
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }
}
//usar as tabelas em outro lugar
module.exports = new Tabelas