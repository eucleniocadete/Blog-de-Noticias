const entrar = document.querySelector(".entrar")
const cadastro = document.querySelector(".cadastrar")

window.addEventListener("pageshow", () =>{
    if(localStorage.getItem("logado")){
        location.href = "../index.html"
    }
})

async function cadastrar() {
    event.preventDefault()
    const dados = {
        "nome": nome.value.trim(),
        "email": email.value.trim().toUpperCase(),
        "senha": senha.value,
        "senha2": senha2.value
    }

    requisicao = await fetch("http://localhost:3000/cadastro", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    resposta = await requisicao.json()
    
    if(resposta.sucesso){
        alert(resposta.sucesso)
        localStorage.setItem("logado", true)
        location.href = "../index.html"
    } else{
        alert(resposta.erro)
    }
}