import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_FORM_KEY = 'feedback-form-state';
let formData = {};

function initForm() {
    form.addEventListener('input', throttle((event) => {
    
        formData[event.target.name] = event.target.value;
    
        localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(data));
    }, 500));
    
    window.addEventListener('DOMContentLoaded', () => {
      try {
        const currentData = localStorage.getItem(LOCAL_STORAGE_FORM_KEY);
        const json = JSON.parse(currentData);
        Object.entries(formData).forEach(([key, value]) => {
          form[key].value = value;
        });
      } catch (error) {
        console.log(error);
      }
    });
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(formData);
        form.reset();
        formData = {};
        localStorage.removeItem(LOCAL_STORAGE_FORM_KEY);
    });
}

if (form) {
    initForm();
}