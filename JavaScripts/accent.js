const blueAccent = document.querySelector('#preferences .content .settings .item .blue');
const purpleAccent = document.querySelector('#preferences .content .settings .item .purple');
const greenAccent = document.querySelector('#preferences .content .settings .item .green');
const yellowAccent = document.querySelector('#preferences .content .settings .item .yellow');


blueAccent.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent-color', 'rgb(0, 122, 255, 0.4)');
    document.documentElement.style.setProperty('--active-color', 'rgb(0, 122, 255, 0.7)');
    document.documentElement.style.setProperty('--popout-hover-background-color', 'rgb(0, 122, 255, 0.2)');
    document.documentElement.style.setProperty('--popout-shortcut-color', 'rgba(61, 155, 255, 1)');

    blueAccent.innerHTML = '<img src="/Accent/blue_accent_checked.svg" alt="">';
    purpleAccent.innerHTML = '<img src="/Accent/purple_accent.svg" alt="">';
    greenAccent.innerHTML = '<img src="/Accent/green_accent.svg" alt="">';
    yellowAccent.innerHTML = '<img src="/Accent/yellow_accent.svg" alt="">';
});

purpleAccent.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent-color', 'rgb(175, 82, 222, 0.4)');
    document.documentElement.style.setProperty('--active-color', 'rgb(175, 82, 222, 0.7)');
    document.documentElement.style.setProperty('--popout-hover-background-color', 'rgb(175, 82, 222, 0.2)');
    document.documentElement.style.setProperty('--popout-shortcut-color', 'rgb(216, 137, 255, 1)');

    blueAccent.innerHTML = '<img src="/Accent/blue_accent.svg" alt="">';
    purpleAccent.innerHTML = '<img src="/Accent/purple_accent_checked.svg" alt="">';
    greenAccent.innerHTML = '<img src="/Accent/green_accent.svg" alt="">';
    yellowAccent.innerHTML = '<img src="/Accent/yellow_accent.svg" alt="">';
});


greenAccent.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent-color', 'rgb(40, 205, 65, 0.4)');
    document.documentElement.style.setProperty('--active-color', 'rgb(40, 205, 65, 0.7)');
    document.documentElement.style.setProperty('--popout-hover-background-color', 'rgb(40, 205, 65, 0.2)');
    document.documentElement.style.setProperty('--popout-shortcut-color', 'rgba(40, 205, 65, 1)');

    blueAccent.innerHTML = '<img src="/Accent/blue_accent.svg" alt="">';
    purpleAccent.innerHTML = '<img src="/Accent/purple_accent.svg" alt="">';
    greenAccent.innerHTML = '<img src="/Accent/green_accent_checked.svg" alt="">';
    yellowAccent.innerHTML = '<img src="/Accent/yellow_accent.svg" alt="">';
});

yellowAccent.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent-color', 'rgb(255, 204, 0, 0.4)');
    document.documentElement.style.setProperty('--active-color', 'rgb(255, 204, 0, 0.7)');
    document.documentElement.style.setProperty('--popout-hover-background-color', 'rgb(255, 204, 0, 0.2)');
    document.documentElement.style.setProperty('--popout-shortcut-color', 'rgba(255, 204, 0, 1)');

    blueAccent.innerHTML = '<img src="/Accent/blue_accent.svg" alt="">';
    purpleAccent.innerHTML = '<img src="/Accent/purple_accent.svg" alt="">';
    greenAccent.innerHTML = '<img src="/Accent/green_accent.svg" alt="">';
    yellowAccent.innerHTML = '<img src="/Accent/yellow_accent_checked.svg" alt="">';
});