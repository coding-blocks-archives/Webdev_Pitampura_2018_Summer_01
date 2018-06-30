if (typeof window === 'undefined') {
    lib = require('./lib')
} else {
    lib = window
}

console.log(lib.add(3,4))
