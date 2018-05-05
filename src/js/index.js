import '../css/tailwind.css'
import '../sass/main.scss'
import $ from 'jquery'
import { Login } from './form-handler/loginHandler'

$(document).ready(() => {
	$('img').click(function() {
		$(this)
			.addClass('animated flip')
			.one('animationend', () => {
				window.location.reload()
			})
	})

	$('form').submit(async function(event) {
		event.preventDefault()
		const [email, password] = $('input').map(function() {
			return this.value
		})
		const res = await Login(email, password)
		if (res.status === 200) {
			$('p').replaceWith(
				`<p class='text-green-light text-center px-4 my-2 animated bounceInLeft'> You've successfully logged in!</p>`
			)
			this.reset()
		} else {
			$('p').replaceWith(
				`<p class='text-red-light text-center px-4 my-2 animated flash'> ${res}</p>`
			)
		}
	})
})
