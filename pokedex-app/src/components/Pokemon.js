import PokemonItem from './PokemonItem'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = ({url}) =>{
	const [imgUrl, setImgUrl] = useState('')
	const [type, setType] = useState('')
	const [name, setName] = useState('')

	useEffect(() => {
		if(url){
			axios.get(url)
				.then(res => {
					setImgUrl(res.data.sprites.other["official-artwork"].front_default)
					setType(res.data.types[0].type.name)
					setName(res.data.name)
				})
				.catch(error =>console.log(error))
		}

	},[url])


	return(
		<div className='pokemon-item'>
			< PokemonItem type={type}  img={imgUrl} name={name}/>
		</div>
	)
}

export default Pokemon;