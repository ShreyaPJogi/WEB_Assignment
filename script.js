$(document).ready(function() {
    $("#changeColor").click(function() {
        $("body").css("background", "#" + Math.floor(Math.random()*16777215).toString(16));
    });
});
