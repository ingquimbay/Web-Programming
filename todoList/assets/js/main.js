// click on item
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// delete item
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

// input new todos
$("input[type='text']").keypress(function (e) {
    if (e.which === 13) { // ASCII 13 -> enter
        // text from input
        var input = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + input + "</li>");
    }
});

$(".fa-edit").click(function () {
    $("input[type='text']").fadeToggle()
});