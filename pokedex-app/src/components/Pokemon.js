import PokemonItem from './PokemonItem'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'

const PokemonItemStyled = styled.div`
display: flex;
justify-content: center;
`

const Pokemon = ({url}) =>{
	const [imgUrl, setImgUrl] = useState('')
	const [mainType, setMainType] = useState('')
	const [types, setTypes] = useState([])
	const [name, setName] = useState('')
	const [lifePoints, setLifePoints] = useState(0)
	const [attack, setAttack] = useState(0)
	const [defense, setDefense] = useState(0)
	const [speed, setSpeed] = useState(0)

	useEffect(() => {
		if(url){
			axios.get(url)
				.then(res => {
					setImgUrl(res.data.sprites.other["official-artwork"].front_default)
					setMainType(res.data.types[0].type.name)
					setName(res.data.name)
					setTypes(res.data.types.slice())
					setLifePoints(res.data.stats[0].base_stat)
					setAttack(res.data.stats[1].base_stat)
					setDefense(res.data.stats[2].base_stat)
					setSpeed(res.data.stats[5].base_stat)
				})
				.catch(error =>console.log(error))
		}

	},[url])

	if(!url){
		return <div>
			<h1>Try again with another name</h1>
		</div>
	}


	return(
		<PokemonItemStyled>
			< PokemonItem
				mainType={mainType}
				img={imgUrl}
				name={name}
				types={types}
				lifePoints={lifePoints}
				speed={speed}
				attack={attack}
				defense={defense}
			/>
		</PokemonItemStyled>
	)
}

export default Pokemon;