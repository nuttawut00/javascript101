var taeApp = {};
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('button');

taeApp.validateEmail = function validateEmail(email) {
  // ถ้า email = nut@gmail.com <<<< condition
  if (email === 'nut@gmail.com' || email === 'nut@hotmail.com' || email === 'asd_2@gmail.com' || email === 'as123+ddd@gmail.com') {
     return true;
  }
  // แล้วไม่ใช่ nut@gmail.com เป็น false'
  else {
      return false;
  }
}


function emailChange(event) {
//   console.log(event)
//   console.log(emailInput.value);
  const email = emailInput.value;
  const result = taeApp.validateEmail(email);
//   console.log(result)
//ถ้า false ให้แสดง email ผิด
  if (result === false) {
    alert('email ผิดไง')
  }

}

emailInput.addEventListener('change', emailChange);


