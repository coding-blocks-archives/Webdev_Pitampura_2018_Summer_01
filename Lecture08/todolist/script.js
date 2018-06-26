
window.onload = function () {
    let list = this.document.getElementById('list')
    let newtask = this.document.getElementById('newtask')
    let addtask = this.document.getElementById('addtask')
    
    window.remove = function (element) {
        // list.removeChild(element.parentElement)
        let text = element.parentElement.children[0]
        if (text.style.textDecoration == 'line-through') {
            text.style.textDecoration = ''
        } else {
            text.style.textDecoration = 'line-through'
        }
    }

    function addNewTask () {
        let newitem = document.createElement('li')
        newitem.innerHTML = 
        ` 
        <span>${newtask.value}</span>
        <button onclick="remove(this)">X</button>
        `
        newtask.value = ""

        list.appendChild(newitem)
    }

    addtask.onclick = function () {
        addNewTask()
    }
    newtask.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            addNewTask()
        }
    })
}