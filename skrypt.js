document.getElementById('toggleFormButton').addEventListener('click', function() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';
    this.style.display = 'none'; // Ukrycie przycisku po kliknięciu
});

document.getElementById('closeFormButton').addEventListener('click', function() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';
    document.getElementById('toggleFormButton').style.display = 'block'; // Pokazanie przycisku po zamknięciu formularza
});
function showError(fieldId, errorMessage) {
    var field = document.getElementById(fieldId);
    var errorIcon = document.createElement('span');
    errorIcon.innerHTML = '&#10060;';
    errorIcon.className = 'error-icon';
    
    var errorText = document.createElement('span');
    errorText.className = 'error-text';
    errorText.textContent = errorMessage;

    field.parentNode.insertBefore(errorIcon, field.nextSibling);
    field.parentNode.insertBefore(errorText, field.nextSibling);
}

function showValid(fieldId) {
    var field = document.getElementById(fieldId);
    var validIcon = document.createElement('span');
    validIcon.innerHTML = '&#10004;';
    validIcon.className = 'valid-icon';
    field.parentNode.insertBefore(validIcon, field.nextSibling);
}

function clearIcons() {
    var icons = document.querySelectorAll('.error-icon, .valid-icon, .error-text');
    icons.forEach(function(icon) {
        icon.parentNode.removeChild(icon);
    });
}
document.getElementById('myForm').addEventListener('reset', function() {
    clearIcons();
});

function checkForm() {
    clearIcons(); // Usuwanie istniejących ikon przed dodaniem nowych

    var form = document.getElementById('myForm');
    var name = form.elements['name'].value.trim();
    var surname = form.elements['surname'].value.trim();
    var age = form.elements['age'].value.trim();
    var email = form.elements['email'].value.trim();
    var password = form.elements['password'].value.trim();
    var address = form.elements['address'].value.trim();
    var postalCode = form.elements['postalCode'].value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var postalCodePattern = /^\d{2}-\d{3}$/;

    if (name === '') {
        showError('name', 'Pole wymagane');
    } else {
        showValid('name');
    }

    if (surname === '') {
        showError('surname', 'Pole wymagane');
    } else {
        showValid('surname');
    }

    if (isNaN(age) || age <= 0) {
        showError('age', 'Wiek musi być liczbą dodatnią');
    } else {
        showValid('age');
    }

    if (!emailPattern.test(email)) {
        showError('email', 'Nieprawidłowy adres email');
    } else {
        showValid('email');
    }

    if (password === '') {
        showError('password', 'Pole wymagane');
    } else {
        showValid('password');
    }

    if (address === '') {
        showError('address', 'Pole wymagane');
    } else {
        showValid('address');
    }

    if (!postalCodePattern.test(postalCode)) {
        showError('postalCode', 'Nieprawidłowy kod pocztowy (00-000)');
    } else {
        showValid('postalCode');
    }
}
