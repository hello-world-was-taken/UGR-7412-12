function active() {
    let loca = location.href
    let list = document.getElementsByClassName("navigation__link")
    let len = list.length
    for (let i = 0; i < len; i++) {
        if(list[i].href == loca) {
            list[i].classList.add("a_active")
        }
    }
}

window.onload = active

function show_nav() {
    let nav = document.getElementById("nav")
    if (nav.classList[nav.classList.length - 1] == "display__nav") {
        nav.classList.remove("display__nav");
      } else {
        nav.classList.add("display__nav");
      }
}

// var backend = document.getElementById("back-end")
// var frontend = document.getElementById("front-end")

function show_hide_back_end() {
    let back_end = document.getElementById('skills__back-end')
    if (back_end.style.display === "none") {
        back_end.style.display = "block"
    }
    else {
        back_end.style.display = "none"
    }
}

function show_hide_front_end() {
    let back_end = document.getElementById('skills__front-end')
    if (back_end.style.display === "none") {
        back_end.style.display = "block"
        back_end.style.transition = "all 2s ease"
    }
    else {
        back_end.style.display = "none"
    }
}