function createGreeter(greeting) {

    function greet(name) {
        console.log(greeting + name)
    }
    return greet
}

const morningGreeting = createGreeter('Good Morning ')
morningGreeting('Arnav')