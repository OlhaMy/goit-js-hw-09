const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let dataForm = {
  email: '',
  message: '',
};

function saveToLs(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return null;
  }
}

form.addEventListener('input', e => {
  dataForm.email = form.elements.email.value;
  dataForm.message = form.elements.message.value;
  saveToLs(STORAGE_KEY, dataForm);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(dataForm);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  dataForm = { email: '', message: '' };
});

document.addEventListener('DOMContentLoaded', () => {
  const userData = loadFromLs(STORAGE_KEY);

  if (userData) {
    dataForm = userData;
    form.elements.email.value = userData.email || '';
    form.elements.message.value = userData.message || '';
  }
});
