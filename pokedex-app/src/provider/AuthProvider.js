
import React, {createContext, useContext, useState} from 'react';
const authContext = createContext();

const useAuthProvider = () => {
	const [pokemonTrainer, setPokemonTrainer] = useState('') ;
	const signIn = (trainer) => {
		setPokemonTrainer(trainer)
	}
	const signOut = ()=> setPokemonTrainer('')
	return{
		pokemonTrainer,
		signIn,
		signOut
	}
}

export const ProvideAuth = ({children}) =>{
	const auth = useAuthProvider()
	return <authContext.Provider value={auth}>
		{children}
	</authContext.Provider>
}

export const useAuth = () => useContext(authContext)