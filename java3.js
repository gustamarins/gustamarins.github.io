mochila = []

function atualizarLista(){

    document.getElementById('capacidade').innerHTML = mochila.length +'/4'
    document.getElementById('item').value = ''

    html = ''
    for(i=0; i<mochila.length; i++){
        html += '<div>'+mochila[i]+' <button onclick="removerIten('+i+')">X</button></div>'
    }
    document.getElementById('itens').innerHTML = html
}

function adicionar(){
    item = document.getElementById('item').value
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()

    if(item == ''){
        alert('Campo vazio')
    }else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista')
    }else{
        if(mochila.length < 4){
            mochila.push(item)
            atualizarLista() 
        }else{
            alert('A mochila está cheia.')
        }

    }
}

function removerIten(i){
    mochila.splice(i,1)
    atualizarLista()
}