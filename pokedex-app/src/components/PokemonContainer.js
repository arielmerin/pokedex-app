import React, {useState, useEffect} from 'react'
import Pokemon from "./Pokemon";
import getPoke from "../services/getPoke";
import styled from "styled-components";
import Pagination from "./Pagination";
import {useAuth} from "../provider/AuthProvider";


const PokemonContainerStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
	grid-auto-columns: max-content;
	gap: 20px 20px;
	justify-content: center;
	padding: 0 20px;
	margin: 0 auto;
	align-items: center;
	`


const UserName = styled.div`
	display: flex;
	font-family: 'Hammersmith One', sans-serif;
	color: #7dad91;
	font-size: 1.5em; 
	@media only screen and (min-width: 768px){
	font-size: 0.8em; 
    position: absolute;
    
    text-orientation: upright;
    writing-mode: vertical-lr;
	}
	 justify-content: center;
`
const UserNameTwo = styled.div`
	display: none;
	font-family: 'Hammersmith One', sans-serif;
	color: #7dad91;
	font-size: 1.5em; 
	@media only screen and (min-width: 768px){
	display: flex;
	font-size: 0.8em; 
    position: absolute;
    right:0;
    text-orientation: upright;
    writing-mode: vertical-lr;
	}
	 justify-content: center;
`



const PokemonContainer = ({typeOfSearch, name, type})=>{
	const [queryTypeTerm, setQueryTypeTerm] = useState([])
	const [queryNameTerm, setQueryNameTerm] = useState('')
	const [pokeURL, setPokeURL] = useState([])
	const [elementsEnd, setElementsEnd] = useState(4)
	const [elementsStart, setElementsStart] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const nameUser = useAuth()

	useEffect(() => {
		getPoke('').then(res=>{
			setPokeURL(res.data.results)
		})
	},[])

	useEffect(() => {
		if(currentPage === 1){
			setElementsStart(currentPage-1)
			setElementsEnd(currentPage+3)
		}
		else{
			setElementsStart(currentPage-1)
			setElementsEnd(currentPage + 3)
		}

	}, [currentPage])

	useEffect(() => {
		setQueryNameTerm(name)
	},[name])

	useEffect(() => {
		setQueryTypeTerm(type)
		setElementsStart(0)
		setElementsEnd(4)
	},[type])

	const listTypes = () =>{
		if(queryTypeTerm){
			const displayElements = queryTypeTerm.slice(elementsStart,elementsEnd)
			return displayElements.map((item, key) =>{
				return <Pokemon url={item.pokemon.url} key={key}/>
			})
		}
	}
	const listAll = () =>{
		const displayElements = pokeURL.slice(elementsStart,elementsEnd)
		return displayElements.map((item, key) =>{
			return <Pokemon url={item.url} key={key}/>
		})
	}


	const listResult = () =>{
		return <Pokemon url={queryNameTerm}/>
	}

	if(typeOfSearch === 'type'){
		return<>
			<div>
				<PokemonContainerStyled>
					{ listTypes()}
				</PokemonContainerStyled>
			</div>
			<Pagination data={pokeURL} setPage={setCurrentPage} />
		</>
	}else if(typeOfSearch === 'name'){
		return <div>
			{listResult()}
		</div>
	}

	return (
		<>
			<UserName >
				<p>Welcome!  {nameUser.pokemonTrainer}</p>
			</UserName>
			<UserNameTwo >
				<p>Welcome!  {nameUser.pokemonTrainer}</p>
			</UserNameTwo>
			<div>
				<PokemonContainerStyled>
					{listAll()}
				</PokemonContainerStyled>
			</div>
		<Pagination data={pokeURL} setPage={setCurrentPage} />
		</>)


}


export default PokemonContainer

