$(document).ready(function () {

    $(".projectCard").click(function () {
        var url = $(this).attr("data-content");
        if (url && typeof url == "string") {

            $("body").append("<a href='" + url + "' id='tempClickLink' target=_blank></a>");
            $("#tempClickLink").click().remove();

        }
    });

});