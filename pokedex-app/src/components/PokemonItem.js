import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import useColorThief from 'use-color-thief';
import capitalize from "../services/Capitalize";

const PokemonItemStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	border-radius: 10%;
	min-width: 250px;
	max-width: 40vw;
	//margin: 0 auto;
	margin-top: 120px;
	bottom: 0;
	position: relative;
	//position: absolute;
	background: ${props => props.colorB || "white"};
	& .psj{
		display: block;
		width: 70%;
		margin: 0 auto;
		top: -7rem;
		position: relative;
		justify-self: center;

	}
	& img::after{
		text('oala')
	}
	&:hover{
		cursor: pointer;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	}
	& h3{
		display: block;
		margin: 0 auto;
		width: 100%;
		color: white;
		font-size: 1.8rem;
	}
	& div{
		display: flex;
		justify-content: center;
		justify-self: center;
		position: relative;
		bottom: -1.5em;
		margin: 0 auto;
		background: white;
		border-radius: 50%;
	}
	& div img{
		padding: 10px;
		width: 50px;
	}
	& h5{
		display: block;
		width: 100%;
		margin: 0 auto;
	}
`

const PokemonItem = ({img, name, type}) =>{
	const [avColor, setAvColor] = useState('black')

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

	// console.log(`The dominant color is ${[0].color} with ${result[0].count} occurrence(s)`)

	return(
		<PokemonItemStyled colorB={avColor}>
			<img className="psj" id={name} src={img} alt={name}/>
			<h3>{capitalize(name)}</h3>
			<h5>{type}</h5>
			<div>
				<img src={`./${capitalize(type)}.png`} alt=""/>
			</div>
		</PokemonItemStyled>
	)
}

export default PokemonItem;