const nameRegexp = /^[A-zА-яЁё]+$/,
      ageRegexp = /^(?:130|[1-9]\d|[6-9])$/,
      emailRegexp = /^\w+?.\w+@\w+\.\w+$/,
      passwordRegexp = /^[a-zA-Z0-9]{8,}$/

const mainForm = document.forms['mainForm'],
      firstNameField = mainForm.elements.firstName,
      secondNameField  = mainForm.elements.secondName,
      ageField  = mainForm.elements.age,
      emailField  = mainForm.elements.email,
      passwordField  = mainForm.elements.password,
      submitFormButton = mainForm.elements.submitFormButton

mainForm.addEventListener('DOMContentLoaded', validateForm)
mainForm.addEventListener('change', validateForm)

mainForm.addEventListener('submit', e => 
  submitFormButton.disabled ? e.preventDefault() : false
)

function validateForm() {
  const validationNotes = mainForm.querySelectorAll('.validationNote')
  let isValid = true

  validationNotes.forEach(element => {
    element.remove()
  })

  validateFiled(firstNameField, nameRegexp)
  validateFiled(secondNameField, nameRegexp)
  validateFiled(ageField, ageRegexp)
  validateFiled(emailField, emailRegexp)
  validateFiled(passwordField, passwordRegexp)

  !isValid ? (submitFormButton.disabled = true) : (submitFormButton.disabled = false)
}

function validateFiled(field, regexp) {
  if (field.value && !regexp.test(field.value)) {
    const validationNote = getValidationNote('Incorrect!')
    isValid = false
    field.before(validationNote)
  } else if (!field.value) {
    isValid = false
  }
}

function getValidationNote(messege) {
  const validationNote = document.createElement('span')

  validationNote.innerText = messege
  validationNote.className = 'validationNote'

  return validationNote
}