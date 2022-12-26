
function criptografar(){
    
    var output = document.querySelector("#texto-resultado");

    //pega texto do input
    var input = document.querySelector("#texto-principal");
    var msgInicial = input.value;
    var msgResultado = "";

    //transforma em array
    var listaVogal = msgInicial.split("");

    //usa for para percorrer array
    for(var i = 0; i < listaVogal.length; i++) {
        //se caractere for igual umas das vogais, criptografa
        if(listaVogal[i] == "a"){
            listaVogal[i] = "ai";
        }
        else if(listaVogal[i] == "e"){
            listaVogal[i] = "enter";
        }
        else if(listaVogal[i] == "i"){
            listaVogal[i] = "imes";
        }
        else if(listaVogal[i] == "o"){
            listaVogal[i] = "ober";
        }
        else if(listaVogal[i] == "u"){
            listaVogal[i] = "ufat";
        }

        msgResultado = msgResultado + listaVogal[i];
    }

    //enviar mensagem criptografada para output
    output.value = msgResultado;
}

function descriptografar(){
    
    var output = document.querySelector("#texto-resultado");

    //pega texto do input
    var input = document.querySelector("#texto-principal");
    var msgInicial = input.value;
    var msgResultado = "";

    //decodifica
    msgInicial = msgInicial.replaceAll("ai", "a");
    	msgInicial = msgInicial.replaceAll("enter", "e");
    		msgInicial = msgInicial.replaceAll("imes", "i");
    			msgInicial = msgInicial.replaceAll("ober", "o");
    				msgInicial = msgInicial.replaceAll("ufat", "u");

    //enviar mensagem criptografada para output
    output.value = msgInicial;
}

// exetuda um reload na página ao clicar o botão reiniciar

const btn = document.querySelector("#reiniciar");

btn.addEventListener("click", () => {

    location.reload();
});


function copiar() {

    let textoCopiado = document.getElementById("texto-resultado");

    textoCopiado.select();
    
    document.execCommand("copy");
    
    alert("Texto copiado!!!");

    addEventListener("click", () => {

    location.reload();
});

}

// aguarda o click no botão colar para executar

    const btnColar = document.getElementById("colar");
    const textColado = document.getElementById("texto-principal");

    btnColar.addEventListener("click", async (e) => {

    const resposta = await navigator.clipboard.readText();

    textColado.value = resposta;

    alert("Inseir o texto copiado no campo de criptografia, clique em Ok !!!");

    console.log(textColado.value);

    });

