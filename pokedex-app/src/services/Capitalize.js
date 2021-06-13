/**
 * Manituplating strings as a Capitalize function
 * @param str string in lowercase
 * @returns {string} formatted string
 */
const capitalize = (str) =>{
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize