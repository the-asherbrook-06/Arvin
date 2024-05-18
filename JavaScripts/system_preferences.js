let systemWindowPopout = 0;
let systemWindowMinimize = 0;

// About Window
const systemOption = document.querySelector('#icon-dropdown .system');
const closeSystemOption = document.querySelector('#preferences .action-bar .close');
const minimizeSystemOption = document.querySelector('#preferences .action-bar .minimize');
const systemWindow = document.getElementById('preferences');

systemOption.addEventListener('click', () => {
    if (systemWindowPopout == 0) {
        systemWindow.style.display = 'grid';
        systemWindowPopout = 1;
    } else {
        systemWindow.style.top = '50%';
        systemWindow.style.left = "50%";
        systemWindow.style.width = "var(--window-width)";
        systemWindow.style.height = "var(--window-height)";
        systemWindow.style.transform = 'translateX(-50%) translateY(-50%)';
        document.querySelector('#preferences .content').style.display = 'grid';

        systemWindow.style.display = 'none';
        systemWindowPopout = 0;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'S') {
        console.log("True");
        if (systemWindow.style.display === 'none' || systemWindow.style.display === '') {
            systemWindow.style.display = 'grid';
            systemWindowPopout = 1;
        } else {
            systemWindow.style.top = '50%';
            systemWindow.style.left = "50%";
            systemWindow.style.width = "var(--window-width)";
            systemWindow.style.height = "var(--window-height)";
            systemWindow.style.transform = 'translateX(-50%) translateY(-50%)';
            document.querySelector('#preferences .content').style.display = 'grid';

            systemWindow.style.display = 'none';
            systemWindowPopout = 0;
        }
    }
});

closeSystemOption.addEventListener('click', () => {
    systemWindow.style.top = '50%';
    systemWindow.style.left = "50%";
    systemWindow.style.width = "var(--window-width)";
    systemWindow.style.height = "var(--window-height)";
    systemWindow.style.transform = 'translateX(-50%) translateY(-50%)';
    document.querySelector('#preferences .content').style.display = 'grid';

    systemWindow.style.display = 'none';
    systemWindowPopout = 0;
    systemWindowMinimize = 0;
});

minimizeSystemOption.addEventListener('click', () => {
    if(systemWindowMinimize == 0)
    {
        systemWindow.style.top = '96%';
        systemWindow.style.left = "18%";
        systemWindow.style.width = "30%";
        systemWindow.style.transform = 'translateX(0) translateY(0)';
        document.querySelector('#preferences .content').style.display = 'none';
        systemWindowMinimize = 1;
    }
    else
    {
        systemWindow.style.top = '50%';
        systemWindow.style.left = "50%";
        systemWindow.style.width = "var(--window-width)";
        systemWindow.style.height = "var(--window-height)";
        systemWindow.style.transform = 'translateX(-50%) translateY(-50%)';
        document.querySelector('#preferences .content').style.display = 'grid';
        systemWindowMinimize = 0;
    }
});