btnCardapio = document.getElementById('botao')
btnCardapio.addEventListener('click', mostrar )
cardapio = document.getElementById('cardapiocompleto')

function mostrar(){
    cardapio.style.display = 'block'
    btnCardapio.style.display = 'none'
}