const { generopublico } = require("../controllers/usuarioController");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, genero, dtNasc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha,  dtNasc, genero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, genero, dtNasc) VALUES ('${nome}', '${email}', '${senha}','${dtNasc}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscaridadepublica(){
    var script = `select year(dtNasc) as 'anodenascimento' from usuario`
    return database.executar(script)
}

function buscargeneropublico(){
    var script = `select genero as 'genero' from usuario`
    return database.executar(script)
}


function QtdAcertosusuario(){
    var script = `
    select usuario.nome as 'usuario', quiz.qtdAcertos as 'QutdAcertos' from usuario 
        join quiz 
            on fkUsuario = idUsuario;`
            
    return database.executar(script)
}



module.exports = {
    autenticar,
    cadastrar,
    buscaridadepublica,
    buscargeneropublico,
    QtdAcertosusuario
};

