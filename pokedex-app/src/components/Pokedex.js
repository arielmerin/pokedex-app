import SearchContainer from "./SearchContainer";
import React, {useState} from "react";
import PokemonContainer from "./PokemonContainer";

const Pokedex = () =>{
	const [type, setType] = useState('');
	const [queryName, setQueryName] = useState('')
	const [queryType, setQueryType] = useState('')

	return(
		<div>
			<SearchContainer
				setNameSearch={setQueryName}
				setTypeSearch={setQueryType}
				setField={setType}/>
			<PokemonContainer typeOfSearch={type} name={queryName} type={queryType} />
		</div>


	)
}

export default Pokedex