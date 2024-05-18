let homeWindowMaximize = 0;
let homeWindowMinimize = 0;

// Home Window
const homeOption = document.querySelector('#icon-dropdown .home');
const maximizeHomeOption = document.querySelector('#home .action-bar .maximize');
const minimizeHomeOption = document.querySelector('#home .action-bar .minimize');
const homeWindow = document.getElementById('home');

homeOption.addEventListener('click', () => {
    if(homeWindowMaximize == 0 && homeWindowMinimize == 1)
    {
        restoreHome(homeWindow);
        homeWindowMinimize = 0;
    }
    else if(homeWindowMaximize == 1 && homeWindowMinimize == 1)
    {
        restoreHome(homeWindow);
        maximizeHome(homeWindow);
        homeWindowMinimize = 0;
    }
    // if (homeWindowPopout == 0 && homeWindowMinimize == 0) {
    //     open(homeWindow);
    //     homeWindowPopout = 1;
    // } 
    // else if (homeWindowPopout == 1 && homeWindowMinimize == 1)
    // {
    //     restore(homeWindow);
    //     homeWindowMinimize = 0;
    // }
    // else {
    //     restore(homeWindow);
    //     close(homeWindow);
    //     homeWindowPopout = 0;
    //     homeWindowMinimize = 0;
    // }
});

document.addEventListener('keydown', function(event) {

    if (event.altKey && event.key == '3') {
        if(homeWindowMinimize == 1 && homeWindowMaximize == 0)
        {
            restoreHome(homeWindow);
            homeWindowMinimize = 0;
        }
        else if(homeWindowMinimize == 1 && homeWindowMaximize == 1)
        {
            restoreHome(homeWindow);
            maximizeHome(homeWindow);
            homeWindowMinimize = 0;
        }
    }
});     

maximizeHomeOption.addEventListener('click', () => {
    if( homeWindowMaximize == 0 )
    {
        if( homeWindowMinimize == 1)
        {
            restoreHome(homeWindow);
            homeWindowMinimize = 0;
        }
        maximizeHome(homeWindow);
        homeWindowMaximize = 1;
    }
    else
    {
        if(homeWindowMinimize == 0)
        {
            restoreHome(homeWindow);
            homeWindowMaximize = 0;
        }
        else if(homeWindowMinimize == 1)
        {
            restoreHome(homeWindow);
            maximizeHome(homeWindow);
        }
    }
});

minimizeHomeOption.addEventListener('click', () => {
    if( homeWindowMaximize == 1 && homeWindowMinimize == 1)
    {
        restoreHome(homeWindow);
        maximizeHome(homeWindow);
        homeWindowMinimize = 0;
    }
    else if( homeWindowMaximize == 0 && homeWindowMinimize == 1 )
    {
        restoreHome(homeWindow);
        homeWindowMinimize = 0;
    }
    else
    {
        if(homeWindowMaximize == 1)
            restoreHome(homeWindow);
        minimizeHome(homeWindow);
        homeWindowMinimize = 1;
    }
});