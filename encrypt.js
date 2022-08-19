document.addEventListener('DOMContentLoaded', () => {
    console.log('Listo')

    
})

const encrypt = document.querySelector('.encrypt')
const decrypt = document.querySelector('.decrypt')
const copy=document.querySelector('.copy')
const entrada = document.querySelector("textarea")

//Agrega el mensaje encriptado y lo visualiza en el panel derecho

function agregarTexto(msgEncriptado){
    let texto=document.querySelector('.result h2')
    texto.textContent=msgEncriptado

    const result=document.querySelector('.result')
    result.style.display='block'
    console.log(result)
    console.log(texto)

    const empty=document.querySelector('.empty')
    empty.style.display='none'
}

//Si no hay ningún mensaje escrito indica en el panel derecho que no hay texto por encriptar o desencriptar

function noText(){
    
    const result=document.querySelector('.result')
    result.style.display='none'
   

    const empty=document.querySelector('.empty')
    empty.style.display='block'

}

//Copia el mensaje encriptado o desenciptado al portapapeles y muestra una alerta del proceso realizado

function copiar(){

    var codigoACopiar = document.querySelector('.result h2');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);

    Swal.fire({
        title: "Texto Copiado",
        background: 'lightgray',
        confirmButtonColor: "#228c12"
        
    })

}

//Funcion encargada de encriptar el mensaje

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

//Funcion encargada de desencriptar el mensaje

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
