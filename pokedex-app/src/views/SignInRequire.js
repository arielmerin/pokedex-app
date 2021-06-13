import styled from "styled-components";
import {useForm} from 'react-hook-form'
import React from 'react';

const SignInContainer = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		height: 100vh;
		background-color: yellow;
		& .logo{
		width: 100vw;
		}
	`

const SignInRequire = ({onSubmit}) =>{
	const {register, handleSubmit} = useForm();
	return (
		<SignInContainer>
			<div className='logo'>
				<img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png" alt=""/>
			</div>



			<form onSubmit={handleSubmit(onSubmit)} >
				<ul id="growing-search-freebie">
					<li>
						<div className="growing-search">
							<div className="input">
								<input placeholder='User' name="username" id='username' type="text" {...register('username')} />
							</div>
							<div className="submit">
								<button type="submit" name="go_search">
									<span className="fa fa-unlock"> </span>
								</button>
							</div>
						</div>
					</li>
				</ul>

			</form>
		</SignInContainer>
	)
}

export default SignInRequire