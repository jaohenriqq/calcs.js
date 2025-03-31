function addValue() {
    document.getElementById("result")

    let valorBotao = event.target.innerHTML

    document.getElementById("result").value += valorBotao
}

function calculator() {

    const resultado = document.getElementById("result").value
    try {
        const resultadoFinal = eval(resultado)
        document.getElementById("result2").value = resultadoFinal
    } catch (error) {
        document.getElementById("result").value = 'Erro'
    }
}

function limpar() {
    document.getElementById("result").value = ''

}

function switchTheme() {

    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')

}
document.getElementById('switchBtn').addEventListener('click',switchTheme)
