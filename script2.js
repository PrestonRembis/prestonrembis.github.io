const userForm = document.getElementById('user-form');
const userInfoList = document.getElementById('user-info-list');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const userInfo = document.createElement('li');
  userInfo.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
  userInfoList.appendChild(userInfo);

});