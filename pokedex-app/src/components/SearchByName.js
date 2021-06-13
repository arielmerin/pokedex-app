
import React from 'react';
import {useForm} from "react-hook-form";
import "./searchStyle.css"

const SearchByName =({handleSearch, active}) =>{

	const {handleSubmit, register, reset} = useForm();

	const handleOnSubmit = (value)=>{
		handleSearch(encodeURI(value.name.toLowerCase()))
		reset()
	}
	if(!active){
		return null;
	}

	return(<div>
		<form onSubmit={handleSubmit(handleOnSubmit)}>
			<ul id="growing-search-freebie">
				<li>
					<div className="growing-search">
						<div className="input">
							<input placeholder='Search' name="search" id='name' type="text" {...register('name')} />
						</div>
						<div className="submit">
							<button type="submit" name="go_search">
								<span className="fa fa-search"></span>
							</button>
						</div>
					</div>
				</li>
			</ul>
		</form>
	</div>)
}

export default SearchByName
