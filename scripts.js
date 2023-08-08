




/* Passo 1: Importação dos elementos HTML e declaração das variáveis. */
const buttons = document.querySelectorAll(".num")
const resultado = document.querySelector(".result")
const backSpace = document.querySelector("#back-space")

let firstNumber = ""
let operator = ""
let secondNumber = ""

/* Nesta parte, importamos os elementos do HTML usando document.querySelectorAll
 e document.querySelector, que selecionam elementos por suas classes CSS.
  Além disso, temos três variáveis que serão usadas para armazenar o primeiro 
  número, o operador e o segundo número em uma sequência de cálculos. */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Passo 2: Definir a função resultScreen. */
/* Essa função é chamada quando um botão é clicado. Ela extrai o valor do botão clicado (buttonValue) e, em seguida, irá tratar os diferentes cenários com base nesse valor. */
function resultScreen(event/* = "click" */) {
    const buttonValue = event/* event = click */.target.value  //O atributo target do evento nos dá o elemento DOM (neste caso, o botão)
    //O evento é uma estrutura de dados que contém informações sobre o evento que ocorreu. 
    //O parâmetro event representa o evento de clique que acionou a função. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* Passo 3: Tratamento dos botões numéricos e do ponto decimal.*/
    if (!isNaN(buttonValue) || buttonValue === ".") {
        if (operator === "") {
            // Se o operador ainda não foi selecionado, armazene o número no primeiro número
            firstNumber += buttonValue;
            resultado.innerHTML = firstNumber;
        } else {
            // Caso contrário, armazene o número no segundo número
            secondNumber += buttonValue;
            resultado.innerHTML = secondNumber;
            //Nesta parte, verificamos se o botão clicado é um número ou o ponto decimal.
            // Se for, dependendo do valor do operador, armazenamos o número no primeiro número 
            //ou no segundo número, e atualizamos o resultado na tela (resultado.innerHTML).

        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Passo 4: Limpar a calculadora quando o botão "C" for clicado.
    } else if (buttonValue === "C") {
        firstNumber = ""
        operator = ""
        secondNumber = ""
        resultado.innerHTML = "0"

        // Passo 5: Armazenar o operador quando um botão de operação (+, -, *, /) for clicado
    } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
        // Se o botão clicado for um operador, armazene o operador
        //se um botão de operação for clicado, o valor desse botão será armazenado na variável operator.
        operator += buttonValue
        resultado.innerHTML = operator
    } else if (buttonValue === "=") {
        // Se o botão clicado for '=', realize a operação matemática e exiba o resultado
        const result = performOperation() // Guardou minha Função de soma
        resultado.innerHTML = result
    }

    const maxLength = 8; // Defina o limite máximo de caracteres
    if (resultado.innerHTML.length > maxLength) {
        resultado.innerHTML = resultado.innerHTML.slice(0, maxLength);}

    
 }          //Em resumo, o passo 5 verifica se o botão clicado é um dos botões de operação ("+", "-", "*", ou "/").
            // Se for, armazena esse operador na variável operator, 
            //que será usada posteriormente para realizar a operação matemática quando o botão "=" for clicado.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function performOperation() {            // Aqui, definimos a função performOperation() que realiza a operação 
    // matemática com base nos números e no operador armazenados. 
    // Usamos um switch para determinar qual operação realizar e retornamos o resultado.
    const num1 = parseFloat(firstNumber) //Aqui, estamos convertendo a string firstNumber em um número de ponto flutuante e armazenando-o na variável num1.
    const num2 = parseFloat(secondNumber) // Converte strings em numeros de ponta fluente 

    switch (operator) { // O switch é uma estrutura de controle do JavaScript que nos permite escolher entre várias opções com base no valor de uma expressão. Neste caso, a expressão é o valor da variável operator.
        case "+":
            return num1 + num2


        case "-":
            return num1 - num2

        case "*":
            return num1 * num2

        case "/":
            return num1 / num2

        default:
            return ""

    }

}

buttons.forEach(button => {
    button.addEventListener("click", resultScreen) //button.addEventListener("click", resultScreen);: Aqui, 
    // adicionando um ouvinte de evento de clique a cada botão na lista.
    // A função resultScreen é passada como o segundo argumento. Isso significa que quando um botão é clicado, 
    //a função resultScreen será chamada e o evento de clique será passado como argumento para essa função. 
    //Essa é a razão pela qual a função resultScreen tem um parâmetro event
});

function apagar(){
    console.log("deu certo")

    if(operator ===""){
        firstNumber = firstNumber.slice(0, -1)
        resultado.innerHTML = firstNumber

    }else {
        secondNumber = secondNumber.slice(0, -1)
        resultado.innerHTML = secondNumber //Usamos o método slice() para remover o último caractere da string armazenada nos números (primeiro ou segundo).

    }




}
