let button = document.querySelector('.mostrarMas')
button.addEventListener('click', () => {
    let ocultos = document.querySelectorAll('.ocultar');
    console.log(ocultos)
    // ocultos.classList.add('visibles')   
    for (let oculto of ocultos) {
        if (oculto.classList.contains('ocultos')) {
            oculto.classList.remove('ocultos')
            button.textContent = 'Mostrar menos certificados'
        } else {
            oculto.classList.add('ocultos')
            button.textContent = 'Mostrar más certificados'
        }
    }
})
//Vamos a hacer un evento que al pulsar el boton se envíe el formulario a la api a mi correo
let btnForm = document.querySelector('.btnForm');
btnForm.addEventListener('click', fenviaForm);

function fenviaForm(e) {
    //Recogemos los datos
    let email = document.querySelector('#exampleFormControlInput1').value
    let mensaje = document.querySelector('#exampleFormControlTextarea1').value
    const url = 'https://sendmail-ultimate-email-sender.p.rapidapi.com/send-email';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '5334858febmshad66610f3be5d4cp15ac3cjsndb7123472117',
            'x-rapidapi-host': 'sendmail-ultimate-email-sender.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sendTo: 'pabloexpops3@gmail.com',
            replyTo: email,
            isHtml: false,
            title: email,
            body: mensaje
        })
    };
    fetch(url, options)
        .then (respuesta => respuesta.json())
        .then (datos => console.log(datos))
        .catch(e => alert(e.message)); 
}
