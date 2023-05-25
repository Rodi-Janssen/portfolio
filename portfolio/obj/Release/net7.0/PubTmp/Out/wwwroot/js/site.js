// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var toggled = true;
if (screen.width > 768) {
    toggled = false;
}

$("#menu-toggle").click(function (e) {
    toggled = !toggled;
    e.preventDefault();
    $("#toggleIcon").toggleClass("fa fa-angle-double-down fa fa-angle-double-up")

    if (toggled) {
        $('#wrapper').css("margin-left", "-220px")
        $('#sidebar-wrapper').css("margin-left", "-500px")
    } else {
        $('#wrapper').css("margin-left", "-20px")
        $('#sidebar-wrapper').css("margin-left", "-250px")
    }
});