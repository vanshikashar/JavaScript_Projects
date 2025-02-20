const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('confirm-password');
const submit = document.getElementById('btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isValidEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        } else if(passwordValue.length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters');
        } else {
            setSuccess(password);
        }
        if(cPasswordValue === '') {
            setErrorFor(cPassword, 'Confirm Your Password ');
            } else if(cPasswordValue !== passwordValue) {
                setErrorFor(cPassword, 'Passwords do not match');
            } else {
                setSuccess(cPassword);
            }
        };
    
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success')
        }
        
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };
        
        
        function isValidEmail(e) {
            var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return reg.test(e);
         }
    
