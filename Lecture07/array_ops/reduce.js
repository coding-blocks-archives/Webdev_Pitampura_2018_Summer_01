let arr = [1,2,3,4,5,6]

let x = arr.reduce(function (accum, v, i, a) {
    return accum * v
}, -10) 