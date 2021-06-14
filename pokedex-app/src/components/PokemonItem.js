import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import useColorThief from 'use-color-thief';
import capitalize from "../services/Capitalize";
import {Link} from 'react-router-dom'

const PokemonItemStyled = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 100px;
		border-radius: 5%;
		background: ${props => props.colorB || '#fff'};
	& a{
		display: contents;
		flex-wrap: wrap;
		justify-content: center;
		text-decoration: none;
		color: inherit;
		max-height: 50vh;
	}
	
	& .psj{
		display: block;
		width: 70%;
		margin: -100px auto 0;
		justify-self: center;
	}
	&:hover{
		cursor: pointer;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	}
	&:hover img{
		top: -8rem;
	}
	& h3{
		display: flex;
    	justify-content: space-around;
		margin: 0 auto;
		width: 100%;
		color: white;
		font-size: 1.8rem;
	}
	& .img-container{
		display: flex;
		justify-content: center;
		justify-self: center;
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

	& a:visited, a:hover, a:active {
  		text-decoration: none;
  		color: inherit;
  	}
  	
  	& .stats{
		display: flex;
	    flex-wrap: wrap;
	    justify-content: center;
  	}
`

const NumberContainer = styled.div`
  	display: flex;
  	font-size: 0.8rem;
  	justify-content: center;
  	align-items: center;
  	width: 12%;
  	margin: 2px 0;
  	color: ${props => props.colorS || 'black'};
  	border-radius: 10rem;
  	background-color: white;
	`
const StatContainer = styled.div`
  	display: flex;
  	flex-wrap: wrap;
  	width: 90%;
  	justify-content: space-evenly;
`

const StatTotal = styled.div`
	display: flex;
	width: 80%;
	color: white;
	margin: 2px 0;
	border-radius: 10rem;
	background-color: white;
	`
const Stat = styled.div`
		width: ${props => `${props.porcentage}%` || '0%'};
		background-color: ${props => props.colorP || 'white'};
		margin: 2px;
		font-size: 0.8rem;
		border-radius: 10rem;
	`
const NameStyled = styled.h1`
	width: 100%;
	color: white;
    margin-top: 0px;
`
const PokemonItem = ({img, name, types, lifePoints, attack, defense, speed}) =>{
	const [avColor, setAvColor] = useState('white')

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


	const listTypesImages = types.map((value, index) =>{
		const name = capitalize(value.type.name)
		return <div className='img-container'>
			<img key={index} src={`./${name}.png`} alt={name}/>
		</div>
	})

	const listTypes = types.map((value, index) =>{
		const name = capitalize(value.type.name)
		return <span>{name} </span>
	})

	return(
		<PokemonItemStyled colorB={avColor}>
			<Link to={`/pokemon/${name}`} >
				<img className="psj" id={name} src={img} alt={name}/>
				<NameStyled>{capitalize(name)}</NameStyled>
				<div className="stats">
					<StatContainer>
						<StatTotal>
							<Stat porcentage={defense} colorP={avColor} > Defense </Stat>
						</StatTotal>
						<NumberContainer colorS={avColor} >{defense}%</NumberContainer>
					</StatContainer>
					<StatContainer>
						<StatTotal>
							<Stat porcentage={attack} colorP={avColor} > Attack </Stat>
						</StatTotal>
						<NumberContainer colorS={avColor}  >{attack}%</NumberContainer>
					</StatContainer>
					<StatContainer>
						<StatTotal>
							<Stat porcentage={lifePoints} colorP={avColor} > Life Points </Stat>
						</StatTotal>
						<NumberContainer colorS={avColor} >{lifePoints}%</NumberContainer>
					</StatContainer>
					<StatContainer>
						<StatTotal>
							<Stat porcentage={speed} colorP={avColor} > Speed </Stat>
						</StatTotal>
						<NumberContainer colorS={avColor} >{speed}%</NumberContainer>
					</StatContainer>
				</div>
				<h3>{listTypes}</h3>
				{listTypesImages}
			</Link>
		</PokemonItemStyled>

	)
}

export default PokemonItem;