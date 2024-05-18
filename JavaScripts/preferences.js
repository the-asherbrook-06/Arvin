let systemWindowPopout = 0;
let systemWindowMinimize = 0;

// System Window
const systemOption = document.querySelector('#icon-dropdown .system');
const closeSystemOption = document.querySelector('#preferences .action-bar .close');
const minimizeSystemOption = document.querySelector('#preferences .action-bar .minimize');
const systemWindow = document.getElementById('preferences');

systemOption.addEventListener('click', () => {
    if (systemWindowPopout == 0 && systemWindowMinimize == 0) {
        restore(systemWindow);
        open(systemWindow);
        systemWindowPopout = 1;
    } 
    else if (systemWindowPopout == 1 && systemWindowMinimize == 1)
    {
        restore(systemWindow);
        systemWindowMinimize = 0;
    }
    else {
        restore(systemWindow);
        close(systemWindow);
        systemWindowPopout = 0;     
        systemWindowMinimize = 0;   
    }
});

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === '2') {  
        if (systemWindow.style.display === 'none' || systemWindow.style.display === '') {
            open(systemWindow);
            systemWindowPopout = 1;
        } else if (systemWindowPopout == 1 && systemWindowMinimize == 1){
            restore(systemWindow);
            systemWindowMinimize = 0;
        } else {
            restore(systemWindow);
            close(systemWindow);    
            systemWindowPopout = 0;
            systemWindowMinimize = 0;
        }
    }
});

closeSystemOption.addEventListener('click', () => {
    restore(systemWindow);
    close(systemWindow);
    systemWindowPopout = 0;
    systemWindowMinimize = 0;
});

minimizeSystemOption.addEventListener('click', () => {
    if(systemWindowMinimize == 0)
    {
        minimize(systemWindow, '96vh', '13%', '15%');
        systemWindowMinimize = 1;
    }
    else
    {
        restore(systemWindow);
        systemWindowMinimize = 0;
    }
});