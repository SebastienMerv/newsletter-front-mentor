const email = document.getElementById('email');
const form = document.getElementById('form');
email.addEventListener('input', function (event) {
    // if email.value est une adresse e-mail valide
    if (validateEmail(email.value) === true) {
        document.getElementById('btn').classList.add('activated');
        email.classList.remove('notgood');
        document.getElementById('error').style.visibility = 'hidden';
    }
    else {
        document.getElementById('btn').classList.remove('activated');
    }
});

form.addEventListener("submit", function (event) {
    if (validateEmail(email.value) === false) {
        event.preventDefault();
        email.classList.add('notgood');
        document.getElementById('error').style.visibility = 'visible';
    }
    else {
        email.classList.remove('notgood');
        document.getElementById('error').style.visibility = 'hidden';
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

if (window.innerWidth < 800) {
    document.getElementById('img').src = 'assets/images/illustration-sign-up-mobile.svg';
}
else {
    document.getElementById('img').src = 'assets/images/illustration-sign-up-desktop.svg';
}

addEventListener('resize', function () {
    if (window.innerWidth < 800) {
        document.getElementById('img').src = 'assets/images/illustration-sign-up-mobile.svg';

    } else {
        document.getElementById('img').src = 'assets/images/illustration-sign-up-desktop.svg';
    }
});