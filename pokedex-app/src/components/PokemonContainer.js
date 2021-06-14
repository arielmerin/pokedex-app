import React, {useState, useEffect, Fragment} from 'react'
import Pokemon from "./Pokemon";
import getPoke from "../services/getPoke";
import styled from "styled-components";
import Pagination from "./Pagination";


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

const PokemonContainer = ({typeOfSearch, name, type})=>{
	const [queryTypeTerm, setQueryTypeTerm] = useState([])
	const [queryNameTerm, setQueryNameTerm] = useState('')
	const [pokeURL, setPokeURL] = useState([])
	const [elementsEnd, setElementsEnd] = useState(4)
	const [elementsStart, setElementsStart] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)

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
			<div>
				<PokemonContainerStyled>
					{listAll()}
				</PokemonContainerStyled>
			</div>
		<Pagination data={pokeURL} setPage={setCurrentPage} />
		</>)


}


export default PokemonContainer

