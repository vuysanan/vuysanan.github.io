// Obfuscate email
const user = 'vuyisanani.inbox';
const domain = 'gmail.com';
const email = user + '@' + domain;
        
// Find the span and replace its content
const emailEl = document.getElementById('email-loader');
if (emailEl) {
    emailEl.innerHTML = `<a href="mailto:${email}">vuyisanani.inbox [at] gmail [dot] com ↗</a>`;
}