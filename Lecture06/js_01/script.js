console.log("HELLO")

function showAlert(name) {
    window.alert("Hello " + name)
}

window.onload = function () {
    document.getElementById('mydiv').innerText = "SOMETHING"

    var alertbtn = document.getElementById('alertbtn')
    var nameinput = document.getElementById('nameinput')

    alertbtn.onclick = function() {
        showAlert(nameinput.value)
    }
}