$(function () {
  let tasklist = $('#tasklist')

  function refreshTaskList(tasks) {
    tasklist.empty()
    tasks.forEach(task => tasklist.append(
      `<li>${task}</li>`
    ))
  }

  $.get('/tasks', function (data) {
    refreshTaskList(data)
  })

  $('#addtask').click(function () {
    let newtask = $('#task').val()
    $.post(
      '/tasks',
      {task: newtask},
      function (data) {
        refreshTaskList(data)
      }
    )
  })
})