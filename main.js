$(document).ready(function() {
    $('#addTaskBtn').click(function() {
        var taskText = $('#taskInput').val();
        if (taskText !== '') {
            $('#tasks').append('<li class="taskItem">' + taskText + '<button class="deleteBtn">X</button></li>');
            $('#taskInput').val('');
        }
    });

    $(document).on('click', '.deleteBtn', function() {
        $(this).parent().remove();
    });

    $(document).on('click', '.taskItem', function() {
        $(this).toggleClass('completed');
    });
});
