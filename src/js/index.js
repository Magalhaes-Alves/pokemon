const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;


btnAvancar.addEventListener('click',()=>{
    cartoes[cartaoAtual].classList.remove('selecionado')
    cartaoAtual++
    if (cartaoAtual>= cartoes.length){
        cartaoAtual=0
    }
    cartoes[cartaoAtual].classList.add('selecionado')
})


const btnVoltar = document.getElementById('btn-voltar')

btnVoltar.addEventListener('click', ()=>{
    cartoes[cartaoAtual].classList.remove('selecionado')
    cartaoAtual--
    if (cartaoAtual<0){
        cartaoAtual = cartoes.length-1
    }
    cartoes[cartaoAtual].classList.add('selecionado')

})
