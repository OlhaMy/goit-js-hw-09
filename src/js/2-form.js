const dataForm = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.element.email.value.trim();
  const message = e.target.element.message.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
  }
  return;
});
