const systemAccount = document.getElementById('systemAccount');
const systemAppearance = document.getElementById('systemAppearance');


const $systemSettings = $('#preferences .content .settings');

systemAccount.addEventListener('click', () => {
    systemAccount.classList.add('active');
    systemAppearance.classList.remove('active');
});

systemAppearance.addEventListener('click', () => {
    systemAppearance.classList.add('active');
    systemAccount.classList.remove('active');
    $systemSettings.load('./Preferences/appearance.html');
});
