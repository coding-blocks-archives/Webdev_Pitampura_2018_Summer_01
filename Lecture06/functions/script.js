
function alpha () {
    console.log("Running alpha")
    return 10
}
function gamma () {
    console.log("Running gamma")
}

var beta = function gamma () {
    console.log("Running beta")
}

var hello = alpha