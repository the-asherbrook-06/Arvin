let aboutWindowPopout = 0;
let aboutWindowMinimize = 0;

// About Window
const aboutOption = document.querySelector('#icon-dropdown .about');
const closeAboutOption = document.querySelector('#about .action-bar .close');
const minimizeAboutOption = document.querySelector('#about .action-bar .minimize');
const aboutWindow = document.getElementById('about');

aboutOption.addEventListener('click', () => {
    if (aboutWindowPopout == 0 && aboutWindowMinimize == 0) {
        open(aboutWindow);
        aboutWindowPopout = 1;
    } 
    else if (aboutWindowPopout == 1 && aboutWindowMinimize == 1)
    {
        restore(aboutWindow);
        aboutWindowMinimize = 0;
    }
    else {
        restore(aboutWindow);
        close(aboutWindow);
        aboutWindowPopout = 0;
        aboutWindowMinimize = 0;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === '1') {
        if (aboutWindow.style.display === 'none' || aboutWindow.style.display === '') {
            open(aboutWindow);
            aboutWindowPopout = 1;
        } else if (aboutWindowPopout == 1 && aboutWindowMinimize == 1){
            restore(aboutWindow);
            aboutWindowMinimize = 0;
        } else {
            restore(aboutWindow);
            close(aboutWindow);
            aboutWindowPopout = 0;
            aboutWindowMinimize = 0;
        }
    }
});     

closeAboutOption.addEventListener('click', () => {
    restore(aboutWindow);
    close(aboutWindow);
    aboutWindowPopout = 0;
    aboutWindowMinimize = 0;
});

minimizeAboutOption.addEventListener('click', () => {
    if(aboutWindowMinimize == 0)
    {
        minimize(aboutWindow, '95vh', '1%', '10%');
        aboutWindowMinimize = 1;
    }
    else
    {
        restore(aboutWindow);
        aboutWindowMinimize = 0;
    }
});