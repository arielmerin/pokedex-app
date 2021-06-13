import React from 'react';
import {useAuth} from "../provider/AuthProvider";
import {Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({children, ...props}) =>{
	const auth = useAuth()
	return(
		<Route {...props}
			render={({location}) => auth.pokemonTrainer ? (children) :
				(<Redirect to={{pathname: '/login', state: { from: location} }} />) }
		/>	)
}
export default ProtectedRoute;