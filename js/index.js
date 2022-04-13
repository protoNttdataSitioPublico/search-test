

const input = document.querySelector('#texto')
const formSearch = document.querySelector('#formSearch')




formSearch.addEventListener('submit', (e)=>{
	e.preventDefault()
	search()
})



const search = () => {
    let texto = input.value.toLowerCase().trim()

	sessionStorage.setItem('searchTest', texto)
	console.log('send', 'event', 'searchTest', 'click', texto);
	
	setTimeout(() => {
		window.location.href = './result.html'
	}, 1000);

	
}









// const keywords = [
// 	(key = ['fibra empresas', 'internet fibra', 'fibra óptica', 'fibra simétrica', 'Giga simétrica', 'internet empresas']),
// 	(key = ['portabilidad con equipo', 'portabilidad empresas']),
// 	(key = ['nueva linea', 'plan libre', 'plan 5g', 'planes móviles', 'planes grupales', 'planes simultaneos', 'varias lineas']),
// 	(key = ['plan móvil', 'móvil libre', 'planes 5G', 'planes libres 5g', 'plan 5g', 'plan varias lineas', 'lineas simultaneas']),
// 	(key = [
// 		'central telefónica',
// 		'telefonía ip',
// 		'gestion en la nube',
// 		'cantral virtual',
// 		'control y gestión',
// 		'telefonía empresas',
// 		'telefonía fija',
// 		'comunicación telefónica',
// 	]),
// 	(key = [
// 		'internet dedicado',
// 		'red empresas',
// 		'internet simétrica',
// 		'fibra óptica dedicada',
// 		'ip fija',
// 		'internet alto rendimiento',
// 		'banda flexible',
// 		'red de alto nivel',
// 	]),
// 	(key = ['iphone', 'iphone 13', 'iphone 13 pro max', 'apple', 'apple iphone 13', 'iphone 13 pro']),
// 	(key = ['iphone', 'iphone 11', 'iphone 11 pro max', 'apple', 'apple iphone 11', 'iphone 11 pro']),
// 	(key = ['samsung', 'galaxy A', 'galaxy A32', 'samsung galaxy A']),
// 	(key = ['motorola', 'moto g', 'motorola moto g20', 'moto g20', 'g20']),
// ]

// const resultados = document.querySelector('#resultados')
// let nuevosDatos = []

// for (let i = 0; i < datos.length; i++) {
// 	keywords[i].forEach((key) => {
// 		nuevosDatos.push({
// 			titulo: datos[i].titulo,
// 			descripcion: datos[i].descripcion,
// 			url: datos[i].url,
// 			keywords: key,
// 		})
// 	})
// }

// function search() {
// 	const texto = document.getElementById('texto').value
// 	const matchedArray = findMatches(texto, nuevosDatos)
// 	console.log(matchedArray)
// 	const result = matchedArray.map((x) => {
// 		console.log(x)
// 	})
// }

// function findMatches(texto, datos) {
// 	const datos_ordenados = datos.sort()
// 	return datos_ordenados.filter((x) => {
// 		const regex = new RegExp(texto, 'gi')
// 		return x.keywords.match(regex)
// 	})
// }

// // el array a ordenar
// var list = ['Delta', ' v', 'CHARLIE', 'bravo'];

// // array temporal contiene objetos con posición y valor de ordenamiento
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })

// // ordenando el array mapeado que contiene los valores reducidos
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// // contenedor para el orden resultante
// var result = mapped.map(function(el){
//   console.log(list[el.index]);
// });
