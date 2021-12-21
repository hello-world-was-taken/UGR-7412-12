function active() {
    console.log("inside")
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
    console.log("inside show_nav")
    let nav = document.getElementById("nav")
    var first = true;
    if (nav.classList[nav.classList.length - 1] == "display__nav") {
        console.log("inside if")
        nav.classList.remove("display__nav");
        // nav.classList.add("navigation__list")
        first = false
      } else {
        // nav.classList.remove("navigation__list")
        nav.classList.add("display__nav");
        active()
        first = true
      }
}