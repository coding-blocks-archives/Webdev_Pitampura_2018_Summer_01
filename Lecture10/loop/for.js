for (var i = 0; i < 5; i++) {
    (function (z) {
        setTimeout(function () {
            console.log(z)
        }, z * 1000)
    })(i)
    // IIFE 
}
