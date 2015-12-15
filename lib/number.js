'use strict';

// MODULES //

var randUniform = require( 'distributions-uniform-random/lib/number.js' );


// FUNCTIONS //

var pow = Math.pow;


// GENERATE INVERSE GAMMA RANDOM NUMBERS //

/**
* FUNCTION random( alpha, beta[, rand] )
*	Generates a random draw from a inverse-gamma distribution with parameters `alpha` and `beta`.
*	Uses inverse transform sampling.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( alpha, beta, rand ) {
	var u = randUniform( 0, 1, rand );
	return beta / pow( u, 1/alpha );
}

module.exports = random;
