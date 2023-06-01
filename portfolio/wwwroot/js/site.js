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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function namechanger() {
    let iteration = 0;
    var name = "Rodi Janssen";

    clearInterval(interval);

    interval = setInterval(() => {
        $("#namechange").text($("#namechange").text()
            .split("")
            .map((letter, index) => {
                if (letter == " ") {
                    return " ";
                }
                if (index < iteration) {
                    return name[index];
                }

                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join(""));

        if (iteration >= $("#namechange").text().length) {
            clearInterval(interval);
        }

        iteration += 1 / 10;
    }, 30);
}

document.querySelector("p").onmouseover = event => namechanger();

function myFunction() {
    namechanger();
}