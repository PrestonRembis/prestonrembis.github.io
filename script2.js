const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(userForm);

  fetch('https://script.google.com/macros/s/AKfycbwNt7fkwwMYnsN7FLx2_o8T8iueZEVFGDiUVxpaidl8JiWNZy-_Zr1xVq6PHedRe08/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log('Form submitted!', response);
    window.location.href = 'contact.html';
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    // Handle any errors that occurred during form submission
  });
});