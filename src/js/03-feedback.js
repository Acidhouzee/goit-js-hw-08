import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const submit = document.querySelector('[type="submit"]');
const LOCAL_STORAGE_FORM_KEY = 'feedback-form-state';


function initForm() {
    form.addEventListener('input', throttle((event) => {
        event.preventDefault();
    
        const data = {
            email: email.value,
            message: message.value
        }
    
        localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(data));
    }, 500));
    
    window.addEventListener('DOMContentLoaded', () => {
      if (!localStorage.getItem(LOCAL_STORAGE_FORM_KEY)) {
        form.reset();
      } else {
        const currentData = localStorage.getItem(LOCAL_STORAGE_FORM_KEY);
        const json = JSON.parse(currentData);
        email.value = json.email;
        message.value = json.message;
      }
    });
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        email.value = '';
        message.value = '';
        const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_KEY));
        console.log(userInfo);
        form.reset();
        localStorage.removeItem(LOCAL_STORAGE_FORM_KEY);
    });
}

if (form) {
    initForm();
}