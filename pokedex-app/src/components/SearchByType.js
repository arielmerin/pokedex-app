import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import capitalize from '../services/Capitalize'
const SelectStyled = styled.select`
	width: 220px;
	display: flex;
	align-items: center;
	justify-content: center;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    outline: none;
    padding: .6em 1.4em .5em .8em;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaaaaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #ffffff;
    /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient.
        for the icon, if you want to change the color, be sure to use \`%23\` instead of \`#\`, since it's a url. You can also swap in a different svg icon or an external image reference

    */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#f3f3f3 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
    
    & ::-ms-expand {
    display: none;
	}
	
	& :hover {
    border-color: #888;
	}
	& :focus {
    border-color: #cd1e1e;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #d42929;
    outline: none;
	}
	& option {
    font-weight:normal;
	}
	`
const SelectContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	`
const SearchByType = ({handleSearch, active}) =>{
	const [selectOptions, setSelectOptions] = useState([])

	/**
	 * Obtaining options for select input
	 */
	useEffect(() =>{
		const promise = axios.get('https://pokeapi.co/api/v2/type/')
		promise.then(res=>{
			setSelectOptions(res.data.results)
		})
	},[])



	/**
	 * Maping Option list
	 * @type {unknown[]}
	 */
	const optionsList = selectOptions.map((val) =>{
		return <option value={val.name} >{capitalize(val.name)}</option>
	})

	if(!active){
		return null;
	}

	return (
		<SelectContainer>
			<SelectStyled onChange={event =>{handleSearch(encodeURI(event.target.value))}}>
				<option value='electric' >All types</option>
				{optionsList}
			</SelectStyled>
		</SelectContainer>
	)
}

export default SearchByType