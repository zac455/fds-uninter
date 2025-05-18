let botao = document.querySelector("#botao");
let textoAparecer = document.querySelector("#textoAparecer");

botao.addEventListener("click", e =>{
    textoAparecer.innerHTML = '"A realidade que você percebe é apenas uma construção mental"';

    setTimeout(() => {
        textoAparecer.innerHTML = "";
    }, 6000);
});
