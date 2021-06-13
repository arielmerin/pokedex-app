import PokemonItem from './PokemonItem'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'

const PokemonItemStyled = styled.div`
display: flex;
justify-content: center;
`

const Pokemon = ({url, handleClick}) =>{
	const [imgUrl, setImgUrl] = useState('')
	const [type, setType] = useState('')
	const [name, setName] = useState('')

	useEffect(() => {
		if(url){
			axios.get(url)
				.then(res => {
					console.log(res.data)
					console.log(res.data)
					setImgUrl(res.data.sprites.other["official-artwork"].front_default)
					setType(res.data.types[0].type.name)
					setName(res.data.name)
				})
				.catch(error =>console.log(error))
		}

	},[url])


	return(
		<PokemonItemStyled>
			< PokemonItem type={type}  img={imgUrl} name={name} />
		</PokemonItemStyled>
	)
}

export default Pokemon;