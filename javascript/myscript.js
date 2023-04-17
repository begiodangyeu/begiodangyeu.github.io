document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    var choice = 'no';
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 65 && choice == 'no') {
            menu.classList.add('menuMore');
            choice = 'yes'
        } else {
            if (choice = 'yes' && window.pageYOffset <= 65) {
                menu.classList.remove('menuMore');
                choice = 'no'
            }
        }
    });
    var mouse = document.querySelector('.name p'),
        mediumscr = document.querySelector('.name .s');
    mouse.addEventListener('mouseenter', function () {
        mediumscr.style.transform = 'scaleX(1)';
        mediumscr.style.color = 'mediumseagreen'
    });
    mouse.addEventListener('mouseleave', function () {
        mediumscr.style.transform = 'scaleX(0)'
    });
}, false)