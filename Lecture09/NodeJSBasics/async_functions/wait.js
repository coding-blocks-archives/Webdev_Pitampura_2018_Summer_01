
let intervalId = setInterval(function () {
    console.log("A")
}, 100)

setTimeout(function () {
    clearInterval(intervalId)
}, 2000)

