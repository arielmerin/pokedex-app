import {Link,useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import getPokeByName from "../services/getPokeByName";
import axios from "axios";
import capitalize from "../services/Capitalize";
import useColorThief from "use-color-thief";

import styled from "styled-components";

const EncountersPage = styled.div`
width: 100vw;
min-width: 100%;
height: 100%;
min-height: 100vh;
background-color: ${props => props.colorB };
margin: 0;
`


const Name = styled.h1`
color: white;
font-family: 'Hammersmith One', sans-serif;
font-size: 2.5em;
margin: 0;
`

const EncountersUl = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0;
margin: 0 auto;
width: 80vw;
padding: 2em 0;
background-color: white;
border-radius: 1em;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`
const EncountersLi = styled.li`
display: flex;
width: 100%;
justify-content: center;
list-style: none;
`


const PokemonEncounters = () =>{
	const [img, setImg] = useState('')
	const [encountersURL, setEncountersURL] = useState('')
	const [encounters, setEncounters] = useState([ ])
	const [avColor, setAvColor]   = useState('whie')

	const {id} = useParams()
	useEffect(()=>{
		getPokeByName(id).then((res)=>{
			setImg(res.data.sprites.other["official-artwork"].front_default)
			setEncountersURL(res.data.location_area_encounters)
		})
	}, [id])	
	
	useEffect(()=>{
		if(encountersURL){
			axios.get(encountersURL).then((res)=>{
				if(res.data.length > 0){
					setEncounters(res.data)
				}
			})
		}
	}, [encountersURL])

	const listEncounters = encounters.map((value, index)=>{
		return <EncountersLi key={index}>
			{capitalize(value.location_area.name.replaceAll('-', ' '))}
		</EncountersLi>
	})

	const { color } = useColorThief(img, {
		format: 'hex',
		colorCount: 10,
		quality: 10,
	});

	useEffect(() => {
		setAvColor(color)
	}, [color])
	
	return( <EncountersPage colorB={avColor}>
		<Link to={`/pokemon/${id}`}>Go Back</Link>
		<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', height: '90vh'}}>
			<div style={{width: '100vw'}}>
				<Name>{capitalize(id)}</Name>
				<Name>Encounters</Name>
			</div>
			<EncountersUl>
				{encounters.length > 0 ? listEncounters: <div>No encouters for show</div>}
			</EncountersUl>
		</div>
	</EncountersPage>)
}

export default PokemonEncounters