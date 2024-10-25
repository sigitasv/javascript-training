document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('kontaktuforma');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput  = document.getElementById('message');
    form.addEventListener('submit', (event) => {
        let valid = true;
        let message = '';
        if (nameInput.value.trim() === '') {
            message += 'Prašome nurodyti savo vardą!\n';
            valid = false;
        }
        if (emailInput.value.trim() === '') {
            message += 'Prašome nurodyti e-pašto adresą!\n';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            message += 'Neteisingai nurodytas e-pašto adresas!\n';
            valid = false;
        }
        if (messageInput.value.trim() === '') {
            message += 'Prašome nurodyti savo paklausimą!\n';
            valid = false;
        }
        if (!valid) {
            alert(message);
            event.preventDefault();  // Do not submit form if there are any errors or mistakes
        }
    });
});