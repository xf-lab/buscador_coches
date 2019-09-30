// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars(){
	return [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];
}

let datosBusqueda = {
	marca: '',
	year: '',
	minimo: 20000,
	maximo: 90000,
	puertas: '',
	transmision: ''
}

const cars = getCars();

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

marca.addEventListener( 'input', (e) => { 
	/*let elem = document.getElementById("marca");
	let marca = elem.options[elem.selectedIndex].value;
	return console.log(marca);*/ 
	console.log(e.target.value);
	datosBusqueda.marca = e.target.value;

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
year.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.year = e.target.value;

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
minimo.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.minimo = Number(e.target.value);

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
maximo.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.maximo = Number(e.target.value);

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
puertas.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.puertas = Number(e.target.value);

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
transmision.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.transmision = e.target.value;

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});
color.addEventListener( 'input', (e) => { 
	console.log(e.target.value);
	datosBusqueda.color = e.target.value;

	//filtrarBusqueda(cars, datosBusqueda.marca);
	let filtrado = filtroCar();
	showCars(filtrado);

});

document.addEventListener( 'DOMContentLoaded', () => { showCars(cars) } );

function showCars(cars){

	//Borra resultados anteriores
	document.getElementById('resultado').innerHTML = '';

	if(!cars.length){
		return document.getElementById('resultado').innerHTML = '<h4> No hay resultados </h4>';
	}else{
		//Crea el HTML
		cars.map( (car) => {  
			let node = document.createElement("h5"); 
			let textnode = document.createTextNode(car.marca+" "+car.modelo+" Año: "+car.year+" Precio: "+car.precio); 
			node.appendChild(textnode);
			
			return document.getElementById('resultado').appendChild(node);

		});
	}

	

	//document.getElementById('resultado').innerHTML = array;
	
}

function filtroCar(){
	const resultado = getCars().filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecio).filter(filtrarPuertas)
						.filter(filtrarTrans).filter(filtrarColor);
	if(resultado.length){
		console.log(resultado);
		return resultado;
	}else{
		console.log("NO hay resultados");
		return resultado;
	}

	
}

function filtrarMarca(car){
	/*if(datosBusqueda.marca || datosBusqueda.year || datosBusqueda.minimo || datosBusqueda.maximo){
		if(!datosBusqueda.marca && !datosBusqueda.year){
			return car.precio >= datosBusqueda.minimo && car.precio <= datosBusqueda.maximo
		}else if(datosBusqueda.marca && !datosBusqueda.year){
			return car.marca === datosBusqueda.marca && car.precio >= datosBusqueda.minimo && car.precio <= datosBusqueda.maximo
		}else if(!datosBusqueda.marca && datosBusqueda.year){
			return car.year == datosBusqueda.year && car.precio >= datosBusqueda.minimo && car.precio <= datosBusqueda.maximo
		}else if(datosBusqueda.marca && datosBusqueda.year){
			return car.marca === datosBusqueda.marca && car.year == datosBusqueda.year && car.precio >= datosBusqueda.minimo && car.precio <= datosBusqueda.maximo
		}
	}else{
		return car;
	}*/
	if(datosBusqueda.marca){
		return car.marca == datosBusqueda.marca;
	}else{
		return car;
	}
}
function filtrarYear(car){
	if(datosBusqueda.year){
		return car.year == datosBusqueda.year;
	}else{
		return car;
	}
}
function filtrarPrecio(car){
	return car.precio >= datosBusqueda.minimo && car.precio <= datosBusqueda.maximo;
}
function filtrarPuertas(car){
	if(datosBusqueda.puertas){
		return car.puertas == datosBusqueda.puertas;
	}else{
		return car;
	}
}
function filtrarTrans(car){
	if(datosBusqueda.transmision){
		return car.transmision === datosBusqueda.transmision;
	}else{
		return car;
	}
}
function filtrarColor(car){
	if(datosBusqueda.color){
		return car.color === datosBusqueda.color;
	}else{
		return car;
	}
}