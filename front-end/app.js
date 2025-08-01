const modal = document.querySelector(".modal-mae")
const publicar = document.querySelector(".publicar")
const entrar = document.querySelector(".entrar")
const cadastrar = document.querySelector(".cadastrar")
const logado = document.querySelector(".logado")
const noticias = document.querySelector(".noticias")
const sair = document.querySelector(".logout")

document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("logado")){
        publicar.style.display = "none"
        entrar.style.display = "none"
        cadastrar.style.display = "none"
        logado.style.display = "flex"
        sair.style.display = "flex"
    }

    mostrarNoticias()
})

async function mostrarNoticias() {
    const req = await fetch("http://localhost:3000/noticias")
    const res = await req.json()

    if(res.erro)
        alert(res.erro)
    else
        noticia(res)
}

function fecharModal(){
    modal.style.display = "none"
}
function mostrarModal(){
    modal.style.display = "flex"
}

async function publicarNoticia(){
    event.preventDefault()

    let noticia = {
        "titulo": titulo.value.trim(),
        "categoria": categoria.value,
        "descricao": descricao.value.trim()
    }

    requisicao = await fetch("./back-end/api.php", {
        method: "post",
        body: JSON.stringify(noticia)
    })

    resposta = await requisicao.json()
    if(resposta.sucesso){
        alert(resposta.sucesso)
        fecharModal()
        location.reload()
    } else{
        alert(resposta.erro)
    }

}

async function mostrarNoticia() {
    const filtro = filtro.value

    let req = await fetch(`http://localhost:3000/noticias_filtro/${filtro}`)
    let res = await req.json()
    
    res.forEach(element =>{
        if(element.conteudo.length > 255){
            element.conteudo = element.conteudo.substring(0, 255) + "..."
        }
    })

    if(res.erro){
        alert(res.erro)
    } else{
        noticia(res)
    }
}

function logout(){
    localStorage.removeItem("logado")
    location.reload()
}

async function pesquisar() {
    event.preventDefault()

    const entrou = localStorage.getItem("logado") ? localStorage.getItem("logado") : false

    let pesquisa = {
        "pesquisa": input_buscar.value,
        "entrou": entrou
    }

    let req = await fetch("./back-end/pesquisar.php", {
        method: "post",
        body: JSON.stringify(pesquisa)
    })

    let res = await req.json()
    
    if(!res.erro){
        noticia(res)

    } else{
        alert(res.erro)
    }
}

function noticia(resposta){
    resposta.forEach(element =>{
        if(element.conteudo.length > 255){
            element.conteudo = element.conteudo.substring(0, 255) + "..."
        }
    })

    noticias.innerHTML = ""
        resposta.forEach(element => {
            noticias.innerHTML += `
                <div class="noticia">
                    <div class="div-titulo">
                        <div class="categoria-data">
                            <div class="cat">
                                <span>${element.categoria}</span>
                            </div>
                            <span>${element.data}</span>
                        </div>
                        <div class="titulo">
                            <h3>${element.titulo}</h3>
                        </div>
                    </div>
                    <div class="info">
                        <span>${element.conteudo}</span>
                    </div>
                    <div class="ler-mais">
                        <a href="#">Ler mais</a>
                    </div>
                </div>
            `
        })
}
