window.onload = function () {
    let todos = []
    
    let list = this.document.getElementById('list')
    let newtask = this.document.getElementById('newtask')
    let addtask = this.document.getElementById('addtask')

    function retrieveTodos () {
        if (localStorage['todos']) {
            todos = JSON.parse(localStorage['todos'])
        }
    }
    function saveTodos () {
        localStorage['todos'] = JSON.stringify(todos)
    }
    function clearList () {
        while(list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    function createListItemFromTodo(todo, pos) {
        let item = document.createElement('li')
        let taskSpan = document.createElement('span')
        let xBtn = document.createElement('button')
        let upBtn = document.createElement('button')
        let downBtn = document.createElement('button')

        taskSpan.innerText = todo.task
        xBtn.innerText = "X"
        upBtn.innerText = "V"
        downBtn.innerText = "^"
        if (todo.done) {
            taskSpan.style.textDecoration = 'line-through'
        }
        xBtn.onclick = function () {
            todos[pos].done = !todos[pos].done
            saveTodos()
            refreshList()
        }
        item.setAttribute('data-id', pos)
        item.appendChild(xBtn)
        item.appendChild(upBtn)
        item.appendChild(downBtn)
        item.appendChild(taskSpan)
        return item
    }
    function refreshList () {
        retrieveTodos()
        clearList()
        for (let i = 0; i < todos.length; i++) {
            list.appendChild(createListItemFromTodo(todos[i], i))
        }
    }
    function addTodo () {
        todos.push({
            task: newtask.value,
            done: false
        })
        saveTodos()
        newtask.value = ""
        refreshList()
    }

    addtask.onclick = addTodo
    refreshList()


}