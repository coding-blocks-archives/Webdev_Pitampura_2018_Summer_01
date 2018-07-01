$(() => {
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')

    addtask.click(() => {
        let task = newtask.val()
        newtask.val('')
        todolist.prepend(
            $('<li>').text(task).click(function () {
                $(this).remove()
            })
        )
    })

})
console.log("hi")