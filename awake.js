
var x = new Date();
var y = x.getTime();
var total = y + (4 * 24 * 3600000);

function count() {
    var now = new Date();
    var currentTime = now.getTime();

    var diff = total - currentTime;
    var s = Math.floor(diff / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h = h % 24;
    m = m % 60;
    s = s % 60

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;

    document.getElementById("day-el").innerHTML = d;
    document.getElementById("hr-el").innerHTML = h;
    document.getElementById("min-el").innerHTML = m;
    document.getElementById("sec-el").innerHTML = s;

    setTimeout(count, 1000)
}

count();
function timer() {
    const connect = document.querySelector("service-connect");

    var timer_el = document.querySelector("day-el")

    if (timer_el.innerHTML === "00") {
        connect.style.display = "block"
    }
    // else {connect.style.display = "none"}
}

timer()


//reveal_on_scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}