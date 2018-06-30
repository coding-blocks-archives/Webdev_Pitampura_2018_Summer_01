// Callback hell

function doSomething(arg1, done) {
    console.log('Doing something with ' + arg1)
    done(function (arg1, doLater) {
        console.log(arg1+ " It is really done")
        doLater()
    })
}

doSomething('abcd', function (afterDone) {
    console.log("It is done")
    afterDone('efgh', function () {
        console.log("Doing this later")
    })
})