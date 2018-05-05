import axios from 'axios'

async function Login(email, password) {
	try {
		const res = await axios.post('https://reqres.in/api/login', {
			email,
			password
		})
		return res
	} catch (error) {
		return error
	}
}

export { Login }
