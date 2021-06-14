import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import getPokeByName from "../services/getPokeByName";
import useColorThief from "use-color-thief";
import capitalize from "../services/Capitalize";

const PokemonPageStyled = styled.div`
		background: ${props => props.colorB || '#fff'};
		height: 100%;
		width: 100vw;
	`

const PokemonImage = styled.img`
	max-width: 90vw;
`
const PokemonPage = ( ) =>{
	const [avColor, setAvColor] = useState('white')
	const [img, setImg] = useState('')
	const [type, setTypes] = useState('fire')
	const [name, setName] = useState('')
	const [numPokedex, setNumPokedex] = useState(0)
	const {id} = useParams()

	useEffect(()=>{
		getPokeByName(id).then((res)=>{
			setImg(res.data.sprites.other["official-artwork"].front_default)
			setTypes(res.data.types[0].type.name)
			setName(res.data.name)
			setNumPokedex(res.data.order)
		})
	}, [id])

	const source = img;
	const { color, palette } = useColorThief(source, {
		format: 'hex',
		colorCount: 10,
		quality: 10,
	});

	useEffect(() => {
		if(color){
			setAvColor(color)
		}
	}, [palette, color]);

	return(
		<PokemonPageStyled colorB={avColor} >
			<PokemonImage id={name} src={img} alt={name}/>
				<h3>{capitalize(name)}</h3>
			<h2>{numPokedex}</h2>
			<h5>{capitalize(type)}</h5>
			<div>
				<img src={`./${capitalize(type)}.png`} alt={name}/>
			</div>
			<Link to='/pokedex'>home</Link>
			<Link to={`/pokemon/${name}/encounters`}>
				<button>Encounters</button>
			</Link>
		</PokemonPageStyled>
	);
}

export default PokemonPage;