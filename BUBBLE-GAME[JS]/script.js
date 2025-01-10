// DOM PRACTICE
var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
var switc = 0
btn.addEventListener("click", function () {
    if (switc == 0) {
        bulb.style.backgroundColor = "yellow"
        switc = 1
    } else {
        bulb.style.backgroundColor = "white"
        switc = 0

    }
})

//bubble
function makeBubble() {
    var clutter = "";

    for (i = 0; i < 84; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="pbubble">
                    ${rn}
                </div>`
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
val = 60
function timerValue(){
    

}
makeBubble();