mochila = []

function atualizarLista(){
    html = ''
    for(i=0; i<mochila.length; i++){
        html += '<div>'+mochila[i]+' <button onclick="removerIten('+i+')">X</button></div>'
    }
    document.getElementById('itens').innerHTML = html
}

function adicionar(){
    item = document.getElementById('item').value
    mochila.push(item)
    atualizarLista()
}

function removerIten(i){
    mochila.splice(i,1)
    atualizarLista()
}