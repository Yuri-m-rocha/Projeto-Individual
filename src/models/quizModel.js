var database = require("../database/config")

function inserir(Usuario, QtdAcertos) {
    var instrucaoSql = `
    insert into quiz (fkUsuario, qtdAcertos) values ('${Usuario}', '${QtdAcertos}');
    `
    console.log(`Executando`)
    return database.executar(instrucaoSql)
}

module.exports = {
    inserir
}