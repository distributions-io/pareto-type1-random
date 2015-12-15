'use strict';

// MODULES //

var randUniform = require( 'distributions-uniform-random/lib/number.js' );


// FUNCTIONS //

var pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta[, rand] )
*	Partially applies `alpha` and `beta` and returns a function
*	to generate random variables from the Pareto (Type I) distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( alpha, beta, rand ) {
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a inverse-gamma distribution with parameters `alpha` and `beta`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = randUniform( 0, 1, rand );
		return beta / pow( u, 1/alpha );
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
