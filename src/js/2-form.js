const inputForm = document.querySelector('.js-form');
let formData = {};

const fillFormFields = form => {
  const formLocalStorage = JSON.parse(localStorage.getItem('form-data'));

  if (formLocalStorage === null) {
    return;
  }

  formData = formLocalStorage;

  for (const key in formLocalStorage) {
    if (formLocalStorage.hasOwnProperty(key)) {
      form.elements[key].value = formLocalStorage[key];
    }
  }
};

fillFormFields(inputForm);

const formChange = event => {
  const formName = event.target.name;
  const formValue = event.target.value;

  formData[formName] = formValue;

  localStorage.setItem('form-data', JSON.stringify(formData));
};
const formSubmit = event => {
  event.preventDefault();

  const formElements = event.target.elements;
  let allFieldsFilled = true;
  for (const element of formElements) {
    if (element.name && element.value === '') {
      allFieldsFilled = false;
      break;
    }
  }
  if (!allFieldsFilled) {
    alert('Fill please all fields');
    return;
  }

  event.target.reset();
  localStorage.removeItem('form-data');
};

inputForm.addEventListener('change', formChange);
inputForm.addEventListener('submit', formSubmit);
