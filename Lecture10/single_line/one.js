let x = 1
setTimeout((id) => clearInterval(id), 2000, setInterval(() => console.log(x++), 100))


