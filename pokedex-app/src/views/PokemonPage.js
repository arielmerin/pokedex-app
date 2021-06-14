import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import getPokeByName from "../services/getPokeByName";
import useColorThief from "use-color-thief";
import capitalize from "../services/Capitalize";
import breakpoint from "../breakpoints";

const NumberContainer = styled.div`
  	display: flex;
  	font-size: 0.75rem;
  	justify-content: center;
  	align-items: center;
  	width: 12%;
  	margin: 2px 0;
  	padding: 2px;
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
	font-family: 'Montserrat', sans-serif;
	display: flex;
	width: 80%;
	color: white;
	margin: 2px 0;
	border-radius: 10rem;
	background-color: white;
	justify-content: flex-end;
	`
const Stat = styled.div`
		width: ${props => `${props.porcentage}%` || '0%'};
		background-color: ${props => props.colorP || 'white'};
		margin: 2px;
		font-size: 0.7em;
		@media only screen and ${breakpoint.device.sm}{
		font-size: 1.5em;
		}
		font-weight: 600;
		border-radius: 10rem;
		font-family: 'Montserrat', sans-serif;
	`
const NameStyled = styled.h1`
	font-family: 'Hammersmith One', sans-serif;
	font-size: 300%;
	width: 100%;
	color: white;
    margin: 0;
	@media only screen and ${breakpoint.device.sm}{
    	font-size: 7rem;    
    }	
    
    @media only screen and ${breakpoint.device.lg}{
    	font-size: 11rem;    
    }

`

const PokemonPageStyled = styled.div`
		background: ${props => props.colorB || '#fff'};
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		grid-gap: 10px;
		width: 100vw;
		justify-content: center;
	`

const PokemonImageContainer = styled.div`
	display: flex;
	width: 100%;
`
const PokemonImage = styled.img`
	display: flex;
	max-width: 90vw;
	margin: 0 auto;
`

const InfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
	width: 80vw;
	min-width:250px;	
`
const NumerStyled = styled.h3`
	margin: 0;
	color: white;
	width: 100vw;
`
const StatsArrayContainer = styled.div`
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
	width: 95vw;
	@media only screen and ${breakpoint.device.lg}{
	width: 80vw;
	}
`

const ImgTypeContainer = styled.div`
		display: flex;
		justify-content: center;
		justify-self: center;
		margin: 0 auto;
		background: white;
		border-radius: 50%;
`

const TypeImagesContainer = styled.div`
		display: flex;
		width: 100%;
		margin: 10px 0;
		justify-content: space-around;
`

const SpanTypes = styled.span`
	font-family: 'Hammersmith One', sans-serif;
	color: #fff;
	font-size: 2rem;
`

const PokemonPage = ( ) =>{
	const [avColor, setAvColor] = useState('white')
	const [img, setImg] = useState('')
	const [types, setTypes] = useState([])
	const [name, setName] = useState('')
	const [numPokedex, setNumPokedex] = useState(0)
	const [statsArray, setStatsArray] = useState([])
	const {id} = useParams()

	useEffect(()=>{
		getPokeByName(id).then((res)=>{
			setImg(res.data.sprites.other["official-artwork"].front_default)
			setName(res.data.name)
			setNumPokedex(res.data.order)
			setTypes(res.data.types.slice())
			setStatsArray(res.data.stats)
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


	const listTypesImages = types.map((value, index) =>{
		const name = capitalize(value.type.name)
		return <ImgTypeContainer key={index}>
			<img  src={`./${name}.png`} alt={name}/>
		</ImgTypeContainer>
	})

	const listTypes = types.map((value, index) =>{
		const name = capitalize(value.type.name)
		return <SpanTypes key={index}>{name} </SpanTypes>
	})


	const listStats = statsArray.map((vale, index)=>{
		return <StatContainer key={index}>
			<NumberContainer colorS={avColor} >{vale.base_stat}%</NumberContainer>
			<StatTotal>
				<Stat porcentage={vale.base_stat} colorP={palette ? palette[index] : avColor} >
					{capitalize(vale.stat.name)}
				</Stat>
			</StatTotal>
		</StatContainer>
	})

	return(
		<PokemonPageStyled colorB={avColor} >
			<Link to='/pokedex'>home</Link>
			< PokemonImageContainer>
				<PokemonImage id={name} src={img} alt={name}/>
			</PokemonImageContainer>
			<InfoContainer >
				<NameStyled>{capitalize(name)}</NameStyled>
				<NumerStyled>Order</NumerStyled>
				<NumerStyled>{numPokedex}</NumerStyled>

				<TypeImagesContainer>
					{listTypesImages}
				</TypeImagesContainer>
				<TypeImagesContainer>
					{listTypes}
				</TypeImagesContainer>
				<StatsArrayContainer>
					{statsArray && listStats}
				</StatsArrayContainer>
				<Link to={`/pokemon/${name}/encounters`}>
					<button>Encounters</button>
				</Link>
			</InfoContainer>
		</PokemonPageStyled>
	);
}

export default PokemonPage;