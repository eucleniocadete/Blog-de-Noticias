const errado = document.querySelector(".errado")
const header = document.querySelector(".header")

window.addEventListener("pageshow", () =>{
    if(localStorage.getItem("logado")){
        location.href = "../index.html"
    }
})

async function login() {
    event.preventDefault()

    dados = {
        "email": email.value.trim(),
        "senha": senha.value
    }

    requisicao = await fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    resposta = await requisicao.json()
    if(resposta.existe){
        alert(resposta.existe)
        localStorage.setItem("logado", true)
        location.href = "../index.html"
    }else{
        errado.style.display = "flex"
        header.style.justifyContent = "end"
    }
}
