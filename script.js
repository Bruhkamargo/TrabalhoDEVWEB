/*const Btn01 = document.getElementById("Btn01")
Btn01.addEventListener('click', () => {
    alert()
})
*/

const Btn02 = document.getElementById("Btn02")
Btn02.addEventListener('click', () => {
    window.location.href = "../index.html"
})

function SaveCadastro() {
    var JsonCadastro = {
        "Nome": document.getElementById('CadNome').value,
        "Email": document.getElementById('CadEmail').value,
        "Senha": document.getElementById('CadSenha').value
    }

    localStorage.setItem(0, JSON.stringify(JsonCadastro))
}
function teste(params) {
    alert("Você foi alertado!")
}