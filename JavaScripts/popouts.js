let iconPopout = 0;
let titlePopout = 0;
let menuPopout = 0;


// Icon Popout
const iconDiv = document.querySelector('.nav .left .icon');
    const imgTag = iconDiv.querySelector('img');
    const iconDropdown = document.getElementById('icon-dropdown');

iconDiv.addEventListener('click', () => {
    if(titlePopout == 0 && menuPopout == 0)
    {
        if (iconPopout == 0) {
            iconDiv.style.backgroundColor = 'var(--active-color)';
            imgTag.src = './Assets/circle_bubble.svg';
            iconDropdown.style.display = 'grid';
            iconPopout = 1;
        } else {
            iconDiv.style.backgroundColor = '';
            imgTag.src = './Assets/circle_line.svg';
            iconDropdown.style.display = 'none';
            iconPopout = 0;
        }
    }
});

document.body.addEventListener('mousedown', (event) => {
    const isClickInsideDropdown = event.target.closest('#icon-dropdown');
    const isClickInsideIconDiv = event.target.closest('.icon');

    if (!isClickInsideDropdown && !isClickInsideIconDiv) {
        iconDiv.style.backgroundColor = '';
        imgTag.src = './Assets/circle_line.svg';
        iconDropdown.style.display = 'none';
        iconPopout = 0;
    }
});

// Title Popout
const titleDiv = document.querySelector('.nav .left .title');
const titleDropdown = document.getElementById('title-dropdown');

titleDiv.addEventListener('click', () => {
    if(iconPopout == 0 && menuPopout == 0)
    {
        if (titlePopout == 0) {
            titleDiv.innerHTML = '<img src="./Assets/circle_bubble.svg" alt="close">';
            titleDiv.style.backgroundColor = 'var(--active-color)';
            titleDropdown.style.display = 'grid';
            titlePopout = 1;
        } else {
            titleDiv.innerHTML = ' Title ';
            titleDiv.style.backgroundColor = '';
            titleDropdown.style.display = 'none';
            titlePopout = 0;
        }
    }
});

document.body.addEventListener('mousedown', (event) => {
    const isClickInsideDropdown = event.target.closest('#title-dropdown');
    const isClickInsideIconDiv = event.target.closest('.title');

    if (!isClickInsideDropdown && !isClickInsideIconDiv) {
        titleDiv.innerHTML = ' Title ';
        titleDiv.style.backgroundColor = '';
        titleDropdown.style.display = 'none';
        titlePopout = 0;
    }
});

// Menu Popout
const menuDiv = document.querySelector('.nav .left .menu');
const menuDropdown = document.getElementById('menu-dropdown');

menuDiv.addEventListener('click', () => {
    if(iconPopout == 0 && titlePopout == 0)
    {
        if (menuPopout == 0) {
            menuDiv.innerHTML = '<img src="./Assets/circle_bubble.svg" alt="close">';
            menuDiv.style.backgroundColor = 'var(--active-color)';
            menuDropdown.style.display = 'grid';
            menuPopout = 1;
        } else {
            menuDiv.innerHTML = ' Menu ';
            menuDiv.style.backgroundColor = '';
            menuDropdown.style.display = 'none';
            menuPopout = 0;
        }
    }
});

document.body.addEventListener('mousedown', (event) => {
    const isClickInsideDropdown = event.target.closest('#menu-dropdown');
    const isClickInsideIconDiv = event.target.closest('.menu');

    if (!isClickInsideDropdown && !isClickInsideIconDiv) {
        menuDiv.innerHTML = ' Menu ';
        menuDiv.style.backgroundColor = '';
        menuDropdown.style.display = 'none';
        menuPopout = 0;
    }
});