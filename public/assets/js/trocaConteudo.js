document.addEventListener("DOMContentLoaded", function () {


    // ADICIONA UM OUVINTE DE CLICK EM CADA ITEM DA LISTA DO MENU


    document.getElementById("sessao-quiz").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA DASH E ESCONDE OS OUTROS

        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("graficos-container").style.display = "none";


    });

    document.getElementById("sessao-grafico").addEventListener("click", function () {

        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("graficos-container").style.display = "block";
            
    });

});