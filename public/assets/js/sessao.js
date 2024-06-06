// sessão

document.addEventListener("DOMContentLoaded", function () {

    var sairDaConta = document.getElementById("sair-da-conta");

    if (sairDaConta) {
        sairDaConta.addEventListener("click", function () {
            window.location = "login.html";
            limparSessao();
        });
    }

});

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../../login.html";
}



// // carregamento (loading)
function aguardar() {
    console.log('aguarde');
}

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    console.log('finalizando aguardar');
    console.log(texto);

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

