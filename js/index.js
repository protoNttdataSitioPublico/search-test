const input = document.querySelector('#texto')
const formSearch = document.querySelector('#formSearch')

formSearch.addEventListener('submit', (e) => {
	e.preventDefault()
	search()
})

const search = () => {
	let texto = input.value.toLowerCase().trim()

	sessionStorage.setItem('searchTest', texto)
	console.log('send', 'event', 'searchTest', 'click', texto)

	setTimeout(() => {
		window.location.href = './result.html'
	}, 1000)
}
