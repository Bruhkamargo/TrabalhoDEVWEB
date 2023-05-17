
function ValidadorCVCadastros() {
    let Nome = document.getElementById('CadNome');
    let Email = document.getElementById('CadEmail');
    let Senha = document.getElementById('CadSenha');
    if (Nome.value == "" && Email.value == "" && Senha.value == "") {
        alert("Por favor preencha todosos campos")
        Nome.focus()
    } else if (Nome.value == "" || Email.value == "" || Senha.value == "") {
        if (Nome.value == "") {
            alert("Por favor defina um Nome valido")
            Nome.focus()
        }
        if (Email.value == "") {
            alert("Por favor defina um E-mail valido")
            Email.focus()
        }
        if (Senha.value == "") {
            alert("Por favor defina uma Senha valida")
            Senha.focus()
        }
    } else {
        alert("Cadastrado!")
    }
}

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

function ValidadorCampoVazio() {
    let Email = document.getElementById('EmailLogin')
    let Senha = document.getElementById('SenhaLogin')
    if (Email.value == "" || Senha.value == "") {        
        alert("Por favor preencha todos os campos")
    } else {
        if (Email.value == "") {
            alert("Por favor preencha o seu E-mail")
            Email.focus()
        }
        if (Senha.value == "") {
            alert("Por favor preencha a sua Senha")
            Senha.focus()
        }        
    }
}

function ValidadorEmail(IdEmail) {
    email = document.getElementById(`${IdEmail}`)
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        alert("E-mail valido");
    }
    else {
        alert("E-mail invalido");
        email.value = ''
    }
}