const datos = [
	{
		titulo: 'Internet Fibra Empresas',
		descripcion: 'Únete a la fibra óptica de Movistar Empresas, planes únicos con Fibra Giga Simétrica, 600 Megas Simétrica, 400 Megas Simétrica',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/internet-fijo/internet-empresas/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=internet_fibra_empresas',
		url: 'ww2.movistar.cl > empresas > internet-empresas',
		keywords: ['fibra empresas', 'internet fibra', 'fibra óptica', 'fibra simétrica', 'Giga simétrica', 'internet empresas'],
	},
	{
		titulo: 'Portabilidad con equipo',
		descripcion: 'Obtén más descuentos contratando desde 2 o más líneas, Pórtate a Movistar y aprovecha las Ofertas en Portabilidad con Equipos de las mejores marcas.',
		urlUTM: 'https://ww2.movistar.cl/empresas?utm_source=buscador&utm_medium=link&utm_campaign=portabilidad_equipo',
		url: 'ww2.movistar.cl > empresas > portabilidad con equipo',
		keywords: ['portabilidad con equipo', 'portabilidad empresas'],
	},
	{
		titulo: 'Planes Móviles Nueva Linea',
		descripcion: '¡Contrata hasta 10 líneas y llévate el mejor precio! Ofertas exclusivas contratando online, saca provecho con la variedad de planes 5G Libres.',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-pyme/?utm_source=buscador&utm_medium=link&utm_campaign=planes_moviles_nueva_linea',
		url: 'ww2.movistar.cl > empresas > planes-pyme',
		keywords: ['nueva linea', 'plan libre', 'plan 5g', 'planes móviles', 'planes grupales', 'planes simultaneos', 'varias lineas'],
	},
	{
		titulo: 'Planes móviles libres 5G',
		descripcion: 'Planes 5G Empresas la evolución tecnológica de las redes móviles, saca provecho de todos nuestros planes Libres y con descuento permanente!',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-pyme/?utm_source=buscador&utm_medium=link&utm_campaign=planes_moviles_5g',
		url: 'ww2.movistar.cl > empresas > planes-moviles',
		keywords: ['plan móvil', 'móvil libre', 'planes 5G', 'planes libres 5g', 'plan 5g', 'plan varias lineas', 'lineas simultaneas'],
	},
	{
		titulo: 'Central Virtual',
		descripcion: 'La evolución de las centrales telefónicas tradicionales a telefonía IP en la nube, controla y gestiona las comunicaciones telefónicas de tu negocio con Central Virtual',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/servicios-digitales/central-virtual/?utm_source=buscador&utm_medium=link&utm_campaign=central_virtual',
		url: 'ww2.movistar.cl > empresas > central-virtual',
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
		descripcion: 'Potencia tu negocio con una conectividad de internet exclusivo de alto rendimiento, servicios dedicados de Internet que brindan conectividad confiable y ancho de banda flexible.',
		urlUTM: 'https://ww2.movistar.cl/empresas/internet-dedicado/?utm_source=buscador&utm_medium=link&utm_campaign=internet_dedicado',
		url: 'ww2.movistar.cl > empresas > internet-dedicado',
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
		descripcion: 'Con Plan 5G Empresa Libre Full, sistema de cámaras Pro de 12 MP: teleobjetivo, gran angular y ultra gran angular, Cámara frontal de 12 MP, pantalla OLED, Super Retina XDR con ProMotion 6,7",memoria Interna de 128 GB',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-13-pro-max-128gb/?utm_source=buscador&utm_medium=link&utm_campaign=iphone_13_promax_128g',
		url: 'ww2.movistar.cl > empresas > apple iphone 13 pro max 128gb',
		keywords: ['iphone', 'iphone 13', 'iphone 13 pro max', 'apple', 'apple iphone 13', 'iphone 13 pro'],
	},
	{
		titulo: 'Iphone 11 64Gb',
		descripcion: 'Con Plan 5G Empresa Libre Full, Cámara principal de 12 MP + 12MP, cámara frontal de 12 MP, pantalla Liquid Retina HD 6.1" , memoria Interna de 64 GB',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-11-64gb/?utm_source=buscador&utm_medium=link&utm_campaign=iphone_11_64g',
		url: 'ww2.movistar.cl > empresas > apple iphone 11 64gb',
		keywords: ['iphone', 'iphone 11', 'iphone 11 pro max', 'apple', 'apple iphone 11', 'iphone 11 pro'],
	},
	{
		titulo: 'Samsung galaxy A32 128Gb',
		descripcion: 'Con Plan 5G Empresa Libre Full, Cámara principal Cuádruple de 64MP + 8MP + 5 MP + 5MP, cámara frontal de 20 MP, pantalla Super AMOLED 6.4", memoria Interna de 128 GB',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/samsung-galaxy-a32/?utm_source=buscador&utm_medium=link&utm_campaign=samsung_galaxy_128g',
		url: 'ww2.movistar.cl > empresas > samsung galaxy a32',
		keywords: ['samsung', 'galaxy A', 'galaxy A32', 'samsung galaxy A'],
	},
	{
		titulo: 'Motorola Moto G20',
		descripcion: 'Cámara principal Cuadruple 48 MP + 8 MP + 2 MP + 2 MP, cámara frontal de 13 MP, pantalla IPS 6.5" 7, memoria Interna de 64 GB',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/motorola-moto-g20/?utm_source=buscador&utm_medium=link&utm_campaign=motorolla_moto_g20',
		url: 'ww2.movistar.cl > empresas > motorola moto g20',
		keywords: ['motorola', 'moto g', 'motorola moto g20', 'moto g20', 'g20'],
	},
]

let resultado, arrayNuevo

const filterSearch = () => {
	let texto = sessionStorage.getItem('searchTest')

	console.log(texto)

	resultado = datos.filter((dato) => dato.keywords.filter((keyword) => keyword.includes(texto)).length > 0)

	if (resultado <= 0) {
		console.log('send', 'event', 'searchTest', 'result', 'no hizo match')
	} else {
		console.log('send', 'event', 'searchTest', 'result', 'hizo match')
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
// 
resultado.map((result) => {
	let li = document.createElement('li')
	li.className = 'result__item'
	li.innerHTML = `
        <a class="result__link" href="${result.urlUTM}">
            <h3 class="result__link-title" >${result.titulo}</h3>
            <p class="result__link-url">${result.url}</p>  
        </a>
        <p class="result__description" >${result.descripcion}</p>
        `
	document.querySelector('#result').appendChild(li)
})

arrayNuevo.map((result) => {
	let li = document.createElement('li')
	li.className = 'result__item'
	li.innerHTML = `
        <a class="result__link" href="${result.urlUTM}">
            <h3 class="result__link-title">${result.titulo}</h3>
            <p class="result__link-url">${result.url}</p>  
        </a>
        <p class="result__description" >${result.descripcion}</p>
        `
	document.querySelector('#otherResult').appendChild(li)
})





const datos2 = [
	{
		titulo: 'Internet Fibra Empresas',
		descripcion: 'Únete a la fibra óptica de Movistar Empresas.',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/internet-fijo/internet-empresas/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=internet_fibra_empresas',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/internet-fijo/internet-empresas/',
		keywords: ['fibra empresas', 'internet fibra', 'fibra óptica', 'fibra simétrica', 'Giga simétrica', 'internet empresas'],
	},
	{
		titulo: 'Portabilidad con equipo',
		descripcion: 'Obtén más descuentos contratando desde 2 o más líneas',
		urlUTM: 'https://ww2.movistar.cl/empresas?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=portabilidad_equipo',
		url: 'https://ww2.movistar.cl/empresas > portabilidad con equipo',
		keywords: ['portabilidad con equipo', 'portabilidad empresas'],
	},
	{
		titulo: 'Planes Móviles Nueva Linea',
		descripcion: 'Planes 5G Empresas, ahora todos nuestros planes son Libres y el descuento es por siempre!',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-pyme/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=planes_moviles_nueva_linea',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-pyme/',
		keywords: ['nueva linea', 'plan libre', 'plan 5g', 'planes móviles', 'planes grupales', 'planes simultaneos', 'varias lineas'],
	},
	{
		titulo: 'Planes móviles libres 5G',
		descripcion: 'Ofertas exclusivas contratando desde 3 líneas ¡Y pagas lo mismo por siempre!',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-moviles/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=planes_moviles_5g',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/planes-moviles/',
		keywords: ['plan móvil', 'móvil libre', 'planes 5G', 'planes libres 5g', 'plan 5g', 'plan varias lineas', 'lineas simultaneas'],
	},
	{
		titulo: 'Central Virtual',
		descripcion: 'La evolución de las centrales telefónicas tradicionales a telefonía IP en la nube.',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/servicios-digitales/central-virtual/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=central_virtual',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/servicios-digitales/central-virtual/',
		keywords: ['central telefónica', 'telefonía ip', 'gestion en la nube', 'cantral virtual', 'control y gestión', 'telefonía empresas', 'telefonía fija', 'comunicación telefónica'],
	},
	{
		titulo: 'Internet Dedicado',
		descripcion: 'Potencia tu negocio con una conectividad de internet exclusivo de alto rendimiento.',
		urlUTM: 'https://ww2.movistar.cl/empresas/internet-dedicado/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=internet_dedicado',
		url: 'https://ww2.movistar.cl/empresas/internet-dedicado/',
		keywords: ['internet dedicado', 'red empresas', 'internet simétrica', 'fibra óptica dedicada', 'ip fija', 'internet alto rendimiento', 'red de alto nivel',]
	},
	{
		titulo: 'Iphone 13 pro max 128Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-13-pro-max-128gb/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=iphone_13_promax_128g',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-13-pro-max-128gb/',
		keywords: ['iphone', 'iphone 13', 'iphone 13 pro max', 'apple', 'apple iphone 13', 'iphone 13 pro'],
	},
	{
		titulo: 'Iphone 11 64Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-11-64gb/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=iphone_11_64g',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/apple-iphone-11-64gb/',
		keywords: ['iphone', 'iphone 11', 'iphone 11 pro max', 'apple', 'apple iphone 11', 'iphone 11 pro'],
	},
	{
		titulo: 'Samsung galaxy A32 128Gb',
		descripcion: 'Plan 5G Empresa Libre Full',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/samsung-galaxy-a32/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=samsung_galaxy_128g',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/samsung-galaxy-a32/',
		keywords: ['samsung', 'galaxy A', 'galaxy A32', 'samsung galaxy A'],
	},
	{
		titulo: 'Motorola Moto G20',
		descripcion: 'Plan 5G Empresa Libre Full',
		urlUTM: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/motorola-moto-g20/?utmExp_source=buscador&utmExp_medium=link&utmExp_campaign=motorolla_moto_g20',
		url: 'https://ww2.movistar.cl/empresas/productos-y-servicios/telefonia-movil/portabilidad-con-equipo/motorola-moto-g20/',
		keywords: ['motorola', 'moto g', 'motorola moto g20', 'moto g20', 'g20'],
	},
]