let arr = [5, 2, 21, 11, 31, 9,1,4]
console.log(arr)
arr.sort(function (a, b) {
    // console.log(`${a}  ${b}`)
    return a.toString() > b.toString()
})