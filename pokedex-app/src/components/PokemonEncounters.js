import {Link,useParams} from 'react-router-dom'

const PokemonEncounters = () =>{
	const {id} = useParams()

	return( <div>
		<h1>{id}</h1>
		<Link to={`pokemon/${id}`}>Go Back</Link>
	</div>)
}

export default PokemonEncounters