let button = document.querySelector('.mostrarMas')
button.addEventListener('click', ()=>{
    let ocultos= document.querySelectorAll('.ocultar'); 
    console.log(ocultos)
    // ocultos.classList.add('visibles')
    
    for(let oculto of ocultos){
        if(oculto.classList.contains('ocultos')){
            oculto.classList.remove('ocultos')
            button.textContent='Mostrar menos certificados'
        } else {
            oculto.classList.add('ocultos')
            button.textContent='Mostrar más certificados'
        }
        
    }
    
})