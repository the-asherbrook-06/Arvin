const AccountSettings = document.getElementById('AccountSettings');
const AppearanceSettings = document.getElementById('AppearanceSettings');

const systemAccount = document.getElementById('systemAccount');
const systemAppearance = document.getElementById('systemAppearance');

systemAccount.addEventListener('click', () => {
    systemAccount.classList.add('active');
    systemAppearance.classList.remove('active');

    AccountSettings.style.display = 'grid';
    AppearanceSettings.style.display = 'none';
});

systemAppearance.addEventListener('click', () => {
    systemAppearance.classList.add('active');
    systemAccount.classList.remove('active');
    
    AccountSettings.style.display = 'none';
    AppearanceSettings.style.display = 'grid';
});
