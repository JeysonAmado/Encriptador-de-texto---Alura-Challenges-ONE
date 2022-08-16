document.addEventListener('DOMContentLoaded', () => {
    console.log('Listo')

    
})

const encrypt = document.querySelector('.encrypt')
const decrypt = document.querySelector('.decrypt')
const copy=document.querySelector('.copy')
const entrada = document.querySelector("textarea")


function createDivResult(entradaTexto){
    const result=document.createElement('div')
    result.classList.add('result')
    

    const texto=document.createElement('h2')
    texto.textContent=entradaTexto
    

    const boton=document.createElement('input')
    boton.classList.add('copy')
    boton.type='submit'
    boton.value="Copiar"
    

    result.appendChild(texto)
    result.appendChild(boton)
    

    const cuerpo=document.querySelector('body')
    cuerpo.appendChild(result)

}

function agregarTexto(textoIngresado){
    let texto=document.querySelector('.result h2')
    texto.textContent=textoIngresado

    const result=document.querySelector('.result')
    result.style.display='block'
    console.log(result)
    console.log(texto)

    const empty=document.querySelector('.empty')
    empty.style.display='none'
}

function noText(){
    
    const result=document.querySelector('.result')
    result.style.display='none'
   

    const empty=document.querySelector('.empty')
    empty.style.display='block'

}

function copiar(){
    var codigoACopiar = document.querySelector('.result h2');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);

    
}

function encriptar(){
    let encriptado=""
    if(entrada.value!=""){
        let input = entrada.value
        

        input=input.replaceAll("e",'enter')
        input=input.replaceAll('i','imes')
        input=input.replaceAll('a','ai')
        input=input.replaceAll('o','ober')
        input=input.replaceAll('u','ufat')
        
        agregarTexto(input.trimEnd())
        console.log(input.trimEnd())
      
    }

    else{
        noText()
    }
    
}

function desencriptar(){
    let encriptado=""
    if(entrada.value!=""){
        let input = entrada.value
        
        input=input.replaceAll("enter",'e')
        input=input.replaceAll('imes','i')
        input=input.replaceAll('ai','a')
        input=input.replaceAll('ober','o')
        input=input.replaceAll('ufat','u')

        agregarTexto(input.trimEnd())
        console.log(input.trimEnd())
      
    }

    else{
        noText()
    }
    
}



encrypt.onclick=encriptar
decrypt.onclick=desencriptar
copy.onclick=copiar
/* encrypt.addEventListener('click', () =>{
    console.log('Hizo Click')
}) */