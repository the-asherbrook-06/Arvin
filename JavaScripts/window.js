function restore(window)
{
    window.style.top = '50%';
    window.style.left = "50%";
    window.style.width = "var(--window-width)";
    window.style.height = "var(--window-height)";
    window.style.transform = 'translateX(-50%) translateY(-50%)';
    window.querySelector('.content').style.display = 'grid';
}

function minimize(window, top, left, width)
{
    window.style.top = '96.5vh';
    window.style.left = left;
    window.style.width = width;
    window.style.transform = 'translateX(0) translateY(0)';
    window.querySelector('.content').style.display = 'none';
}

function close(window)
{
    window.style.display = 'none';
}

function open(window)
{
    window.style.display = 'grid';
}

function restoreHome(window)
{
    window.style.top = '50%';
    window.style.left = "50%";
    window.style.width = "var(--home-window-width)";
    window.style.height = "var(--home-window-height)";
    window.style.transform = 'translateX(-50%) translateY(-50%)';
    window.querySelector('.content').style.display = 'grid';
}

function maximizeHome(window)
{
    window.style.top = '4.6vh';
    window.style.left = '0.5vw';
    window.style.width = '99vw';
    window.style.height = "93vh";
    window.style.transform = 'translateX(0) translateY(0)';
}

function minimizeHome(window)
{
    window.style.top = '96.5vh';
    window.style.left = '29%';
    window.style.width = '10%';
    window.style.transform = 'translateX(0) translateY(0)';
    window.querySelector('.content').style.display = 'none';
}