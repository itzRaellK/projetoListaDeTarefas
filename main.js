$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();

        const novaTarefa = $("#nova-tarefa").val();
        const novoItem = $('<li style="display: none"></li>');

        $(`
            <li>
                ${novaTarefa}
            </li>
        `).appendTo(novoItem);

        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn();
        $("#nova-tarefa").val("");

        $("li").click(function() {
            $(this).parents("li").css({"text-decoration":"line-through"})
        })
    })
})