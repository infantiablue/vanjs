/**
 * Validate if the input string more than a number of characters
 * @param {number} min - Minimum number of characters
 * @returns {Function} Function to take String input and return boolean value
 */
const minLength = (min) => {
	return (input) => (input.length < min ? `Value must be at least ${min} characters` : null);
};

/**
 * Validate if the input string less than a number of characters
 * @param {number} max - Maximum number of characters
 * @returns {Function} Function to take String input and return boolean value
 */
const maxLength = (max) => {
	return (input) => (input.length < max ? `Value must be less than ${max} characters` : null);
};

/**
 * Validate if the input string is in email format
 * @returns {Function} Function to take String input and return boolean value
 */
const isEmail = () => {
	const re = /\S+@\S+\.\S+/;
	return (input) => (re.test(input) ? null : "Must be a valid email address");
};

export default { isEmail, minLength, maxLength };
