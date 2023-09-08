const boton = document.getElementById("btnBuscar");

boton.addEventListener("click", async () => {
const input = document.getElementById("inputBuscar").value;
const url = `https://images-api.nasa.gov/search?q=${input}`


const planeta = await fetch(url)
.then(response => response.json())
.then(planeta => (planeta))
.catch((error) => console.log(error))


const contenedor = document.getElementById("contenedor");
contenedor.innerHTML="";
for(let i =0; i< planeta.collection.items.length; i++){
    const imagen = planeta.collection.items[i].links[0].href;
    const titulo = planeta.collection.items[i].data[0].title;
    const descripcion = planeta.collection.items[i].data[0].description;
    const fecha = planeta.collection.items[i].data[0].date_created;

     contenedor.innerHTML +=`
            <div class="planeta">
                <div>
                    <img src="${imagen}" alt="${titulo}">
                </div>
                <div>
                    <h3>${titulo}</h3>
                    <p><strong>Descripción:</strong> ${descripcion}</p>
                    <p><strong>Fecha de Creación:</strong> ${fecha}</p>
                </div>
            </div>`;

}

console.log(planeta);
});