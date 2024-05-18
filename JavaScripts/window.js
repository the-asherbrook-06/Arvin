function restore(window)
{
    window.style.top = '50%';
    window.style.left = "50%";
    window.style.width = "var(--window-width)";
    window.style.height = "var(--window-height)";
    window.style.transform = 'translateX(-50%) translateY(-50%)';
    document.querySelector('#preferences .content').style.display = 'grid';
}

function minimize(window, top, left, width)
{
    window.style.top = top;
    window.style.left = left;
    window.style.width = width;
    window.style.transform = 'translateX(0) translateY(0)';
    document.querySelector('#preferences .content').style.display = 'none';
}

function close(window)
{
    window.style.display = 'none';
}

function open(window)
{
    window.style.display = 'grid';
}