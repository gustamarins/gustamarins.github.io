function calcular(){

    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    //alert(' A soma é ' + (n1+n2))
    document.getElementById('resultado').innerHTML = 'A soma é: '+ (n1+n2)
}

function logar(){

    nome = document.getElementById('nome').value
    idade = parseInt(document.getElementById('idade').value)

    document.getElementById('mensagem').innerHTML = 'Boas vindas ' + nome+'!'

}