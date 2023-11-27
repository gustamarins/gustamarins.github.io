//alert('Olá mundo')
//console.log('testando console aqui')
//document.write('testando algo')
//document.getElementById('titulo').innerHTML = 'olá pessoal'

/*a = 1
b = 2
c = a+b

typeof(c)
alert(c)
*/

clicks = 0

function teste(){
    clicks += 1
    document.getElementById('contagem').innerHTML = clicks 
    if(clicks >= 10){
        document.getElementById('contagem').style.Color = 'red'
    }
}

