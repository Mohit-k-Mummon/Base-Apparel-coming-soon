const submit = document.getElementById('submit-btn');
const error = document.querySelector('.main__error-message');
const form = document.querySelector('.form');
const input = document.querySelector('#email');
const label = document.querySelector('.label');
const inputGroup = document.querySelector('.main__input-group');

form.addEventListener('submit', validate);
submit.addEventListener('click', validate);

// This function is to prevent default form and button actions + email validation via regex
function validate(e) {
	e.preventDefault();

	const inputValue = input.value.trim();

	if (!isEmail(inputValue)) {
		error.style.display = 'block';
		label.style.display = 'block';
		inputGroup.style.border = '1px solid var(--Soft-Red)';
	} else {
		error.style.display = 'none';
		label.style.display = 'none';
		inputGroup.style.border = '1px solid #dbcbcc';
		input.value = '';
		window.alert('Success');
	}
}

// Regex function
function isEmail(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
