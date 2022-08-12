document.addEventListener('DOMContentLoaded', () => {
    console.log('Listo')

    
})

const encrypt = document.querySelector('.encrypt')
const decrypt = document.querySelector('.decrypt')
const entrada = document.querySelector("textarea")

function encriptar(){
    let encriptado=""
    if(entrada.value!=""){
        let input = entrada.value
        console.log(cadenaAux)

        input=input.replaceAll("e",'enter')
        input=input.replaceAll('i','imes')
        input=input.replaceAll('a','ai')
        input=input.replaceAll('o','ober')
        input=input.replaceAll('u','ufat')
       
        console.log(input.trimEnd())
      
    }

    else{
        alert("espacio vacio")
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


       
        
       
        console.log(input.trimEnd())
      
    }

    else{
        alert("espacio vacio")
    }
    
}

encrypt.onclick=encriptar
decrypt.onclick=desencriptar
/* encrypt.addEventListener('click', () =>{
    console.log('Hizo Click')
}) */