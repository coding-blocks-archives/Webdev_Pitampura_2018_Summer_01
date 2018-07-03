$(() => $('#addtask').click(
    () => $('#todolist').append(
        $('<li>')
        .append(
            $('<span>')
            .text($('#newtask').val())
            .click(
                (e) => $(e.currentTarget).parent().toggleClass('done')
            )
        )
        .append(
            $('<button>')
            .text('X')
            .click(
                (e) => $(e.currentTarget).parent().remove()
            )
        )
        .append(
            $('<button>')
            .text('⬇')
            .click(
                (e) => $(e.currentTarget).parent().insertAfter(
                    $(e.currentTarget).parent().next()
                )
            )
        )
        .append(
            $('<button>')
            .text('⬆')
            .click(
                (e) => $(e.currentTarget).parent().insertBefore(
                    $(e.currentTarget).parent().prev()
                )
            )
        )
    )
)
.click(() => $('#newtask').val(''))
.next().click(
    () => $('.done').remove()
))