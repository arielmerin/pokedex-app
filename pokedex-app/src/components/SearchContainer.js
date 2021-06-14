
import React from 'react';
import SearchByType from "./SearchByType";
import SearchByName from "./SearchByName";
import getPokeByName from "../services/getPokeByName";
import getPokeByType from "../services/getPokeByType";
import styled from "styled-components";


const SearchContainerStyled = styled.div`
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		& .buttons{
			display: flex;
			width: 20vw;
			align-items: center;
			flex-wrap: wrap;
			min-width: 200px;
		}
		& button{
		height: 100%;
		align-self: center;
		margin-left: 0;
	    border: none;
	    font-size: 1.15em;
	    color: #aaa;
	    background-color: #fff;
	    padding-top: 2px;
	    padding-bottom: 2px;
	    transition: color 200ms;
	    width: 30px;
	    border-radius: 10%;
	    height: 30px;
	    background-size: cover;
		}
		& button:hover {
  			cursor: pointer;
		}
		& button span {
		background-image: src('../../public/home.svg');
		}
	`
const SearchContainer = ({setNameSearch, setTypeSearch, setField}) =>{

	const handleNameSearch = (name)=>{
		setField('name')
		getPokeByName(name)
			.then((res) => {
				setNameSearch(res.config.url)
			})
			.catch(error => (error))
	}

	const handleTypeSearch = (type) =>{
		setField('type')
		getPokeByType(type)
			.then((res) => {
				setTypeSearch(res.data.pokemon)
			})
			.catch(error => console.error(error))
	}

	return (
		<SearchContainerStyled>
			<SearchByName handleSearch={handleNameSearch} active={true} />
			<div className="buttons">
				<SearchByType handleSearch={handleTypeSearch} active={true} />
			</div>
			<button onClick={()=>{
				setField('')
				setNameSearch('')
			}}><span>O</span></button>
		</SearchContainerStyled>
	)
}

export default SearchContainer