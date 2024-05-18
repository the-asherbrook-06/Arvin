let aboutWindowPopout = 0;

// About Window
const aboutOption = document.querySelector('#icon-dropdown .about');
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
});A