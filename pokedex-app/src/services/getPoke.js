
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

const getPoke = () =>{
	const promise = axios(`${baseUrl}pokemon?limit=1118`, {
		method: 'GET'
	})

	return promise
}

export default getPoke