mochila = []

function adicionar(){
    item = document.getElementById('item').value
    mochila.push(item)
    document.getElementById('itens').innerHTML = mochila
}