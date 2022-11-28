const listKeys = document.querySelectorAll('input[type=button]');
const inputPhone = document.querySelector('input[type=tel]');

for (i = 0; i < listKeys.length; i++)
  {
    const key = listKeys[i];
    
    key.onclick = function () {
      inputPhone.value = inputPhone.value + key.value;
    }
  }
  