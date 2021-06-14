import React from 'react'
import {useHistory} from 'react-router-dom'
import SignInRequire from "../views/SignInRequire";
import {useAuth} from "../provider/AuthProvider";

const LogIn = ( )=>{
	const history = useHistory()
	const {signIn} = useAuth();

	const handleSignIn = (obj) =>{
		signIn(obj.username)
		history.push('/pokedex')
	}

	return(
		<SignInRequire onSubmit={handleSignIn} />
	)
}

export default LogIn

