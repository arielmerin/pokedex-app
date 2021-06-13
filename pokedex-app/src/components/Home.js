import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {
	const history = useHistory()
	return (
		<div>
			Welcome to the pokedex
			<button onClick={()=>{
					console.log('esto es history ', history)
					history.push('/login')
			}}>Login</button>
		</div>
	);
};

export default Home;