import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import getPokeByName from "../services/getPokeByName";
import useColorThief from "use-color-thief";
import capitalize from "../services/Capitalize";
import breakpoint from "../breakpoints";
import "../Animation.css"

const NumberContainer = styled.div`
  	display: flex;
  	font-size: 0.75rem;
  	justify-content: center;
  	align-items: center;
  	width: 12%;
  	margin: 2px 0;
  	padding: 2px;
  	color: ${props => `rgb(${props.colorS.join()})` || 'black'};
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
		background-color: ${props => `rgb(${props.colorP.join()})` || 'white'};
		margin: 2px;
		padding: 3px 0;
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
		background: ${props => `rgb(${props.colorP.join()})` || '#fff'};
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		grid-gap: 10px;
		width: 100vw;
		justify-content: center;
}
	`

const PokemonImageContainer = styled.div`
	margin-top: 2.5em;
	display: flex;
	width: 90%;
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
	display: flex;
    justify-content: center;
	margin: 0;
	color: white;
	width: ${props=> props.ancho || '100vw'};
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
		flex-wrap: wrap;
		width: 100%;
		margin: 10px 0;
		justify-content: ${props => props.justify || 'space-around'};
`

const SpanTypes = styled.span`
	font-family: 'Hammersmith One', sans-serif;
	color: #fff;
	font-size: 2rem;
`

const AbilityItem = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	& img{
	width: 10%;
	}
`

const MoveItem = styled.div`
		background-color: ${props => `rgb(${props.colorFont.join()})` || 'white'};
		padding: 4px 6px;
		border-radius: 2rem;
		margin-top: 6px;
		display: flex;
		color: white;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	& span{
		background-color: white;
		color:${props => `rgb(${props.colorFont.join()})` || 'white'};
		margin: 0 3px;
		width: 1rem;
		padding: 2px;
		font-weight: bold;
		justify-content: center;
		border-radius: 0.5rem;
		font-size: 0.7rem;
		display: flex;
		align-items: center;
	}
`

const HomeImgContainer = styled.div`
	display: flex;
	position: absolute;
	top: 5px;
	left: 0;
	overflow: hidden;
	justify-content: flex-start;
`

const HomeImg = styled.img`	
	width: 3.5rem;
`

const EncountersButton = styled.button`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	margin: 2em 0 5em 0;
	border: none;
	padding: 0.8em 1em;
	border-radius: 5em;
	font-family: 'Hammersmith One', sans-serif;
	font-size: 1em;
	color: ${props => `rgb(${props.colorFont.join()})` || 'black'};
	`

const PokemonPage = ( ) =>{
	const [avColor, setAvColor] = useState([0,0,0])
	const [img, setImg] = useState('')
	const [types, setTypes] = useState([])
	const [name, setName] = useState('')
	const [numPokedex, setNumPokedex] = useState(0)
	const [statsArray, setStatsArray] = useState([])
	const [abilities, setAbilities] = useState([])
	const [moves, setMoves] = useState([])
	const [weight, setWeight] = useState(0)
	const [height, setHeight] = useState(0)
	const {id} = useParams()

	useEffect(()=>{
		getPokeByName(id).then((res)=>{
			setImg(res.data.sprites.other["official-artwork"].front_default)
			setName(res.data.name)
			setNumPokedex(res.data.order)
			setTypes(res.data.types.slice())
			setStatsArray(res.data.stats)
			setAbilities(res.data.abilities)
			setMoves(res.data.moves)
			setWeight(res.data.weight)
			setHeight(res.data.height)
		})
	}, [id])

	const source = img;

	const { color, palette } = useColorThief(source, {
		format: 'rgb',
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

	const listAbilities = abilities.map((value, index) =>{
		return <AbilityItem key={index}>
			<SpanTypes>{capitalize(value.ability.name)} </SpanTypes>
			{value.is_hidden ? <img src='./openeye.png' alt={value.ability.name} />: <img src="/closedeye.png" alt={value.ability.name} />}
		</AbilityItem>
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

	const listMoves = moves.map((value, index)=>{
		return <MoveItem key={index} colorFont={palette ? palette[index % 10] : avColor}>
			{capitalize(value.move.name)} <span>{index +1}</span>
		</MoveItem>
	})

	return(
		<PokemonPageStyled colorP={avColor} >
			<Link to='/pokedex'>
				<HomeImgContainer>
					<HomeImg className='home' src='./pokeball.png' alt='pokeball' />
				</HomeImgContainer>
			</Link>
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

				<TypeImagesContainer>
					{listAbilities}
				</TypeImagesContainer>
				<TypeImagesContainer>
					<div style={{width: '40vw'}}>
						<NumerStyled ancho='50vw'> Weihgt </NumerStyled>
						<NumerStyled ancho='50vw'>{weight}</NumerStyled>
					</div>
					<div style={{width: '40vw'}}>
						<NumerStyled ancho='40vw'>Height</NumerStyled>
						<NumerStyled ancho='40vw'>{height}</NumerStyled>
					</div>
				</TypeImagesContainer>
				<TypeImagesContainer justify='space-between'>
					{listMoves}
				</TypeImagesContainer>


				<Link to={`/pokemon/${name}/encounters`}>
					<EncountersButton colorFont={avColor} >Encounters</EncountersButton>
				</Link>
			</InfoContainer>
		</PokemonPageStyled>
	);
}

export default PokemonPage;