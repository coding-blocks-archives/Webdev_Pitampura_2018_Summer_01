$(() => {
  $('#todo-form').submit((ev) => {

    ev.preventDefault() //will prevent form submission

    let newtask = $('#task').val()
    $('#todo-list').append(
      `<li>${newtask}</li>`
    )
    $.post(
      '/api/todos',
      {task: newtask},
      (todos) => ({}) // you might refresh entire list if you want to
    )
  })
})