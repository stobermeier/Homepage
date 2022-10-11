score = 0
const alpahbet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

letter1 = -1;

letter2 = -1;

timer = 5;

var timer_interval = setInterval(timer_func, 1000);


window.onload = function () {
    document.getElementById("timer").innerHTML = timer;

    set_letters();

};


function update_score(correct) {
    timer = 6;

    if (correct) {
        score += 1;
        notification_color = "darkseagreen"

    } else {
        score = 0;
        notification_color = "tomato"

        error_msg();

    }

    document.body.style.backgroundColor = notification_color;

    setTimeout(() => {
        document.body.style.backgroundColor = "darkgray";
    }, 500);

    document.getElementById("score").innerHTML = score;

};


function set_letters() {
    do {
        letter1 = Math.floor(Math.random() * 26)
        letter2 = Math.floor(Math.random() * 26)
    }
    while (letter1 == letter2);


    document.getElementById("letter1").innerHTML = alpahbet[letter1];

    document.getElementById("letter2").innerHTML = alpahbet[letter2];

}

function letter1_click() {
    if (letter1 < letter2) {
        update_score(true);

    } else {
        update_score(false)
    }
    set_letters();

}
function letter2_click() {
    if (letter1 < letter2) {
        update_score(false);

    } else {
        update_score(true)
    }
    set_letters();

}

function error_msg() {
    if (letter1 < letter2) {
        var msg = alpahbet[letter1] + " before " + alpahbet[letter2]
    } else {
        var msg = alpahbet[letter2] + " before " + alpahbet[letter1]
    }
    document.getElementById("errorlist").innerHTML = document.getElementById("errorlist").innerHTML + "<br>" + msg
};


function timer_func() {
    timer -= 1;

    document.getElementById("timer").innerHTML = timer;

    console.log(timer)

    if (timer < 1) {
        update_score(false);

        set_letters();

        timer = 6;

    }
}