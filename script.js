let url = "";
let busqueda = document.getElementById('buscador');
let botonBuscador = document.getElementById('botonBuscador');
let resultado = document.getElementById('resultado');

//Función que se activa con el botón;
botonBuscador.addEventListener("click", () => {
	//Cambia la url y hace la solicitud
	url = "https://japceibal.github.io/emercado-api/cats_products/"+busqueda.value+".json";
	getData();
});

//Función que muestra los productos
function showData(dataArray){
	resultado.innerHTML = "";
	resultado.innerHTML += `<h2>${dataArray.catName}</h2>`

  	for (let i = 0; i < dataArray.products.length; i++) {
    	resultado.innerHTML += 
    	`<div class="list-group-item">
			<p>${dataArray.products[i].name}</p>
		</div>`
  	}
}



async function getData () {
	try{
		const respuesta = await fetch(url);
	const data = await respuesta.json();
	showData(data);
	}
	catch{
		resultado.innerHTML = `<h3 class="bg-danger text-white">Categoría desconocida</h3>`;
	}
	
}