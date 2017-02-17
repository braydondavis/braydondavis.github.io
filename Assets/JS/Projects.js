$(document).ready(function () {

    $(".projectCard").click(function () {
        var url = $(this).attr("data-content");
        if (url && typeof url == "string") {
			window.open(url);
        }
    });

});