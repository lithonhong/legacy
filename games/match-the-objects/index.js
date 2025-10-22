a = 0
pos = ["left", "right"]
var correct = 0
var place = "place"
time = 15

var interval = setInterval(timer, 1000);

function timer() {
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
    	clearInterval(interval);
    }
    time--
}

function generate_bg(no) {
    return "url(assets/matchobjects.svg) " + ((no%3) * -128) + "px " + Math.floor(no / 3) * -128 + "px";
}

function refresh() {
    if (time > 0) {
        correct = Math.floor(Math.random() * 9);
        pos = ["left", "right"]
        place = pos.splice(Math.floor(Math.random() * 2), 1)[0];
        other = Math.floor(Math.random() * 9)
        while (other == correct) {
            other = Math.floor(Math.random() * 9)
        }
        pos = pos[0]
        document.getElementById(place).style.background = generate_bg(correct);
        document.getElementById("standard").style.background = generate_bg(correct);
        document.getElementById(pos).style.background = generate_bg(other);
    }
}

function press(side) {
    if (time > 0) {
        if (side == place) {
            a += 2;
        } else {
            a -= 2
        }
        document.getElementById("points").innerHTML = a;
        refresh()
    }
}

refresh()
