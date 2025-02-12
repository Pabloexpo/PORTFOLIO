let url = "https://api.github.com/users/Pabloexpo/repos"; 
let section = document.querySelector('section'); 
fetch(url)
    .then(respuesta => respuesta.json())
    .then (datos => {
        datosTotales = datos
        mostrarDatos(datosTotales)
    })
    .catch( e => alert(e.message))

//Seleccionamos el select y le hacemos el evento
let select = document.querySelector('#select'); 
select.addEventListener('change', filtrar); 
//Seleccionamos el buton para buscar y volvemos a filtrar
let btnBuscar= document.querySelector('.buscar'); 
btnBuscar.addEventListener('click', buscar); 
function mostrarDatos(datos){
    console.log(datos)
    //Para cada repositorio, generaremos un article que se incluirá luego al section  
    datos.forEach(dato => {
        section.innerHTML = `<div class="row">`; // Agregar fila al inicio

        datos.forEach(dato => {
            section.innerHTML += `
            <div class="col-md-4 col-sm-6 mb-4"> 
                <div class="card h-100 shadow">
                    <div class="card-body">
                        <h5 class="card-title">${dato.name}</h5>
                        <p class="">${dato.description || "Sin descripción"}</p>
                        <a href="${dato.html_url}" target="_blank" class="btn btn-primary">Ver Proyecto</a>
                    </div>
                </div>
            </div>`;
        });
    
        section.innerHTML += `</div>`; // Cerrar la fila
    });
}
function buscar(e){
    let input = document.querySelector('#input'); 
    let valor = input.value; 
    //console.log(valor)
    let busqueda = datosTotales.filter (dato => {
        if (dato.name.includes(valor)){
            return dato.name
        } 
    })
    mostrarDatos(busqueda)
    input.value=''; 
}
function filtrar(e){
    let valor = e.target.value; 
    console.log(valor)
    if (valor=="todos"){
        url = datosTotales; 
        mostrarDatos(datosTotales)
    } else {
        let filtrado = datosTotales.filter(dato => dato.language===valor); 
        mostrarDatos(filtrado)
    }
}