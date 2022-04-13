const datos = [
	{
		titulo: 'Internet Fibra Empresas',
		descripcion: 'Únete a la fibra óptica de Movistar Empresas.',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/internet-fijo/internet-empresas/',
		keywords: ['fibra empresas', 'internet fibra', 'fibra óptica', 'fibra simétrica', 'Giga simétrica', 'internet empresas'],
	},
	{
		titulo: 'Portabilidad con equipo',
		descripcion: 'Obtén más descuentos contratando desde 2 o más líneas',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/',
		keywords: ['portabilidad con equipo', 'portabilidad empresas'],
	},
	{
		titulo: 'Planes Móviles Nueva Linea',
		descripcion: 'Planes 5G Empresas, ahora todos nuestros planes son Libres y el descuento es por siempre!',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-pyme/',
		keywords: ['nueva linea', 'plan libre', 'plan 5g', 'planes móviles', 'planes grupales', 'planes simultaneos', 'varias lineas'],
	},
	{
		titulo: 'Planes móviles libres 5G',
		descripcion: 'Ofertas exclusivas contratando desde 3 líneas ¡Y pagas lo mismo por siempre!',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-moviles/',
		keywords: ['plan móvil', 'móvil libre', 'planes 5G', 'planes libres 5g', 'plan 5g', 'plan varias lineas', 'lineas simultaneas'],
	},
	{
		titulo: 'Central Virtual',
		descripcion: 'La evolución de las centrales telefónicas tradicionales a telefonía IP en la nube.',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/servicios-digitales/central-virtual/',
		keywords: [
			'central telefónica',
			'telefonía ip',
			'gestion en la nube',
			'cantral virtual',
			'control y gestión',
			'telefonía empresas',
			'telefonía fija',
			'comunicación telefónica',
		],
	},
	{
		titulo: 'Internet Dedicado',
		descripcion: 'Potencia tu negocio con una conectividad de internet exclusivo de alto rendimiento.',
		url: 'https://ww2.movistar.cl/empresas/internet-dedicado/',
		keywords: [
			'internet dedicado',
			'red empresas',
			'internet simétrica',
			'fibra óptica dedicada',
			'ip fija',
			'internet alto rendimiento',
			'banda flexible',
			'red de alto nivel',
		],
	},
	{
		titulo: 'Iphone 13 pro max 128Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-13-pro-max-128gb/',
		keywords: ['iphone', 'iphone 13', 'iphone 13 pro max', 'apple', 'apple iphone 13', 'iphone 13 pro'],
	},
	{
		titulo: 'Iphone 11 64Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-11-64gb/',
		keywords: ['iphone', 'iphone 11', 'iphone 11 pro max', 'apple', 'apple iphone 11', 'iphone 11 pro'],
	},
	{
		titulo: 'Samsung galaxy A32 128Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/samsung-galaxy-a32/',
		keywords: ['samsung', 'galaxy A', 'galaxy A32', 'samsung galaxy A'],
	},
	{
		titulo: 'Motorola Moto G20',
		descripcion: 'Plan 5G Empresa Libre Full',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/motorola-moto-g20/',
		keywords: ['motorola', 'moto g', 'motorola moto g20', 'moto g20', 'g20'],
	},
]

let resultado, arrayNuevo

const filterSearch = () => {
	let texto = sessionStorage.getItem('searchTest')

	console.log(texto)

	resultado = datos.filter((dato) => dato.keywords.filter((keyword) => keyword.includes(texto)).length > 0)

	if (resultado <= 0) {
		console.log(datos)
	}
	console.log(resultado)

	arrayNuevo = []

	for (var i = 0; i < datos.length; i++) {
		var igual = false
		for (var j = 0; (j < resultado.length) & !igual; j++) {
			if (datos[i]['titulo'] == resultado[j]['titulo']) {
				igual = true
			}
		}
		if (!igual) arrayNuevo.push(datos[i])
	}

	console.log(arrayNuevo)

	return resultado, arrayNuevo
}
filterSearch()

resultado.map((result) => {
	let li = document.createElement('li')
	li.innerHTML = `
        <a href="${result.url}">
            <h3>${result.titulo}</h3>
            <p>${result.url}</p>  
        </a>
        <p>${result.descripcion}</p>
        `
	document.querySelector('.result').appendChild(li)
})

arrayNuevo.map((result) => {
	let li = document.createElement('li')
	li.innerHTML = `
         <a href="${result.url}">
             <h3>${result.titulo}</h3>
             <p>${result.url}</p>  
         </a>
         <p>${result.descripcion}</p>
         `
	document.querySelector('.other-result').appendChild(li)
})
