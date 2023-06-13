

var element = document.getElementById("DOUZEE");
var touche1 = null;
var touche2 = null;
const ach1 = document.getElementById("ach1")

document.addEventListener("keydown", function(event) {
    var touchePressee = event.key;
    touche1 = touche2;
    touche2 = touchePressee;
    if (touche1 === "1" && touche2 === "2") {
        ach1.textContent = "Le Saint DOUZE"

        element.classList.add("animated");

        setTimeout(function() {
            element.classList.remove("animated");
        }, 1000);
    }
});