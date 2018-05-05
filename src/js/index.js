import '../css/tailwind.css'
import '../sass/main.scss'
import $ from 'jquery'
import { Login } from './form-handler/loginHandler'

$(document).ready(() => {
	$('img').click(function() {
		window.img = this
		$(this)
			.addClass('animated bounce')
			.one('animationend', () => {
				$(this).removeClass('animated bounce')
			})
	})

	$('form').submit(async event => {
		event.preventDefault()
		const [email, password] = $('input').map(function() {
			return this.value
		})
		const res = await Login(email, password)
		console.log(res.data)
	})
})
