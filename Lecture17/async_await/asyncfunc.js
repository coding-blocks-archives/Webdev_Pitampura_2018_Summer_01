

function getSqrtAfter2Sec (num, done) {
    setTimeout(() => done(Math.sqrt(num)), 2000)
}

function getSqrtAfter1Sec (num) {
    return new Promise((resolve, reject) => {
        if (num < 0) return reject(new Error("What are you imagining?"))
        setTimeout(() => resolve(Math.sqrt(num)), 1000)
    })
}

// getSqrtAfter2Sec(10, function (sqrt) {
//     console.log(sqrt)
// })

async function task () {
    console.log(await getSqrtAfter1Sec(10))
    console.log(await getSqrtAfter1Sec(11))
    getSqrtAfter1Sec(-12)
    .then((sqrt) => console.log(sqrt))
    .catch(err => console.error(err))
}

task()
console.log("asdsadasdasdasdsadas")