const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    }
}