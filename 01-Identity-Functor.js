// compare:: (x,y) -> Bool
const compare = (x, y) => (x.toString() === y.toString() ? true : false)

/**
 *  Category Theory --> Functors
 *  1. Provides a container to wrap a value.
 *  2. It provides us with a map method for working with data being secured.
 *
 * Functor Laws
 *  1. Identity
 *  2. Composition
 */

const squareNumbers = (x = 1) => x * x
const timesTen = (x = 1) => x * 10

const Identity = x => ({
	map: f => Identity(f(x)),
	valueOf: () => x,
	inspect: () => `Identity:: ${x}`
})

/**
 *
 * 1. [X] Identity rule
 * 2. [x] Composition rule
 */

const X = Identity(1992)

const id = x => x

const a = X
const b = a.map(id)

compare(a.map(id), b.map(id)) //?

const IdentityTwo = Identity(2000)

compare(IdentityTwo.map(squareNumbers).map(timesTen), IdentityTwo.map(x => timesTen(squareNumbers(x)))) //?
