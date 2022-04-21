const input = document.querySelector('#texto')
const button = document.querySelector('#btnSearch')
const formSearch = document.querySelector('#formSearch')

button.addEventListener('click', (e) => {
	e.preventDefault()
	search()
	ga('send', 'event', 'homevariante', 'click-buscador', texto)
})
input.addEventListener('keyup', (e) => {

	if(e.keycode === '13'){
		e.preventDefault()
	search()
	ga('send', 'event', 'searchTest', 'enter-buscador', texto)
	}
})

const search = () => {
	let texto = input.value.toLowerCase().trim()

	sessionStorage.setItem('searchTest', texto)
	

	setTimeout(() => {
		window.location.href = './result.html'
	}, 1000)
}
