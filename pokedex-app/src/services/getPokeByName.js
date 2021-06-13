
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

const getPokeByName = (name) =>{
	const promise = axios(`${baseUrl}pokemon/${name.toLowerCase()}`, {
		method: 'GET'
	})

	return promise
}

export default getPokeByName