function colorirFundo() {
    document.body.bgColor = "#ffffff";
    document.body.style.color ="#000000";

    let txtCor = document.getElementById("txtCorFundo");
    let corFundo = txtCor.value.toLowerCase(); //é uma declaração de variável, que vai pegar o elemento que escrevemos em amarelo "value" é o valor dele 
    //e o toLowerCase faz a gente poder digitar em minusculo 



    switch (corFundo) { // o algoritmo switch vai procurar a cor e vai executar a troca dela
        case "azul":
            document.body.bgColor = "#0000ff";         //ele muda a cor de fundo da pagina
            document.body.style.color = "#ffffff"
            break;                                      // o break fecha o interropitor, tipo a saída
        case "roxa":
            document.body.bgColor = "#A020F0";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "roxo":
            document.body.bgColor = "#A020F0";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "vermelho":
            document.body.bgColor = "#red";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "preto":
            document.body.bgColor = "#000000";         //ele muda a cor de fundo da pagina
            document.body.style.color = "#ffffff";
            break;                                      // o break fecha o interropitor, tipo a saída
        case "preta":
            document.body.bgColor = "#000000";         //ele muda a cor de fundo da pagina
            document.body.style.color = "#ffffff";
            break;                                      // o break fecha o interropitor, tipo a saída
        case "amarela":
            document.body.bgColor = "#FFFF00";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "amarelo":
            document.body.bgColor = "#FFFF00";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "marrom":
            document.body.bgColor = "#964B00";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "branca":
            document.body.bgColor = "#FFFFFF";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "branco":
            document.body.bgColor = "#FFFFFF";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "azul claro":
            document.body.bgColor = "#ADD8E6";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "verde claro":
            document.body.bgColor = "#88E788";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "lilas":
            document.body.bgColor = "#C8A2C8";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "rosa":
            document.body.bgColor = "#FFC0CB";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "cinza":
            document.body.bgColor = "#5A5A5A";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "vermelha":
            document.body.bgColor = "#FF0000";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "verde":
            document.body.bgColor = "#008000";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída
        case "laranja":
            document.body.bgColor = "#FFA500";         //ele muda a cor de fundo da pagina
            break;                                      // o break fecha o interropitor, tipo a saída

    }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function () { // essa linha é para apertar o "enter" e mudar de cor sem precisar clicar no "colorir"

    colorirFundo();
})

function colorirTexto() {
    let corTexto = document.getElementById("txtCorTexto").value.toLowerCase();

    switch (corTexto){
    case "azul":
        document.body.style.color = "#0000ff";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "roxa":
        document.body.style.color = "#A020F0";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "roxo":
        document.body.style.color = "#A020F0";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "vermelho":
        document.body.style.color = "#red";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "preto":
        document.body.style.color = "#000000";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "preta":
        document.body.style.color = "#000000";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "amarela":
        document.body.style.color = "#FFFF00";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "amarelo":
        document.body.style.color = "#FFFF00";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "marrom":
        document.body.style.color = "#964B00";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "branca":
        document.body.style.color = "#FFFFFF";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "branco":
        document.body.style.color = "#FFFFFF";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "azul claro":
        document.body.style.color = "#ADD8E6";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "verde claro":
        document.body.style.color = "#88E788";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "lilas":
        document.body.style.color = "#C8A2C8";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "rosa":
        document.body.style.color = "#FFC0CB";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "cinza":
        document.body.style.color = "#5A5A5A";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "vermelha":
        document.body.style.color = "#FF0000";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "verde":
        document.body.style.color = "#008000";         //ele muda a cor de fundo da pagina
        break;                                      // o break fecha o interropitor, tipo a saída
    case "laranja":
        document.body.style.color = "#FFA500";         //ele muda a cor de fundo da pagina
        break;  
    }                                   // o break fecha o interropitor, tipo a saída

}
document.getElementById("txtCorTexto").addEventListener('keyup', function () { // essa linha é para apertar o "enter" e mudar de cor sem precisar clicar no "colorir"

    colorirTexto();
})
