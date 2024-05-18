let aboutWindowPopout = 0;
let aboutWindowMinimize = 0;

// About Window
const aboutOption = document.querySelector('#icon-dropdown .about');
const closeAboutOption = document.querySelector('#about .action-bar .close');
const minimizeAboutOption = document.querySelector('#about .action-bar .minimize');
const aboutWindow = document.getElementById('about');

aboutOption.addEventListener('click', () => {
    if (aboutWindowPopout == 0) {
        aboutWindow.style.display = 'grid';
        aboutWindowPopout = 1;
    } else {
        aboutWindow.style.display = 'none';
        aboutWindowPopout = 0;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'A') {
        const myDiv = document.getElementById('about');
        if (myDiv.style.display === 'none' || myDiv.style.display === '') {
            myDiv.style.display = 'grid';
            aboutWindowPopout = 1;
        } else {
            myDiv.style.display = 'none';
            aboutWindowPopout = 0;
        }
    }
});

closeAboutOption.addEventListener('click', () => {
    aboutWindow.style.top = '50%';
    aboutWindow.style.left = "50%";
    aboutWindow.style.width = "var(--window-width)";
    aboutWindow.style.height = "var(--window-height)";
    aboutWindow.style.transform = 'translateX(-50%) translateY(-50%)';
    document.querySelector('#about .content').style.display = 'grid';

    aboutWindow.style.display = 'none';
    aboutWindowPopout = 0;
    aboutWindowMinimize = 0;
});

minimizeAboutOption.addEventListener('click', () => {
    if(aboutWindowMinimize == 0)
    {
        aboutWindow.style.top = '95%';
        aboutWindow.style.left = "1%";
        aboutWindow.style.width = "15%";
        aboutWindow.style.transform = 'translateX(0) translateY(0)';
        document.querySelector('#about .content').style.display = 'none';
        aboutWindowMinimize = 1;
    }
    else
    {
        aboutWindow.style.top = '50%';
        aboutWindow.style.left = "50%";
        aboutWindow.style.width = "var(--window-width)";
        aboutWindow.style.height = "var(--window-height)";
        aboutWindow.style.transform = 'translateX(-50%) translateY(-50%)';
        document.querySelector('#about .content').style.display = 'grid';
        aboutWindowMinimize = 0;
    }
});