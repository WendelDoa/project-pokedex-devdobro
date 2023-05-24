//Buscar elemento pelo id e guarda numa variável constante(não muda o valor)
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Seleciona a tag body e guarda numa variável constante
const body = document.querySelector("body");

//Cria uma constante e guarda a imagem do botão
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//Identificação do clique do usuário atribuido a variável
botaoAlterarTema.addEventListener("click", () => {
    
    //Cria uma variável para saber se o modo escuro está ativo
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    //Maneira alternativa de fazer o procedimento de troca de tema
    //body.classList.toggle("modo-escuro")

    //Verifica se o modo escuro está ativo
    if(modoEscuroEstaAtivo) {

        //Como o modo escuro está ativado, ele irá remover.
        body.classList.remove("modo-escuro");
        
        //Troca a imagem da lua para o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");

    } else {

        //Pega a lista de classes da tag body e adiciona a classe personalizavel "modo-escuro"
        body.classList.add("modo-escuro");
    
        //Pega a variável da imagem e define outro atributo
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");

    }
    
});