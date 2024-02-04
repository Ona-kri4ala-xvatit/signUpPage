const form = document.forms.signUp;
const nameElem = form.name;
const surnameElem = form.surname;
const genderElem = form.gender;
const armyElem = form.army;
const ageElem = form.age;
const cigaretteElem = form.cigarette;
const cigaretteBrandElem = form.cigaretteBrand;
const emailElem = form.email;

const regexNameSurnameValidate = /^[a-zA-Z]{5,8}$/;
const regexAgeValidate = /^\d+$/;
const regexBrandValidate = /^[a-zA-Z0-9]{5,8}$/;
const regexEmailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.querySelector('.form-gender').addEventListener('click', e => {
    if (e.target.value === 'man') {
        document.querySelector('.form-army').style.display = 'block';
    }

    if (armyElem.checked) {
        document.querySelector('.form-combat-arms').style.display = 'block';
    }
    else {
        document.querySelector('.form-combat-arms').style.display = 'none';
    }
});

ageElem.addEventListener('input', e => {
    let value = regexAgeValidate.test(e.target.value);
    if (!value) {
        e.target.value = '';
    }

    if (e.target.value == 18) {
        document.querySelector('.form-cigarette').style.display = 'block';

        cigaretteElem.addEventListener('click', e => {
            if (cigaretteElem.checked) {
                document.querySelector('.form-brand-cigarette').style.display = 'block';
            }
            else {
                document.querySelector('.form-brand-cigarette').style.display = 'none';
            }
        })
    }
    else {
        document.querySelector('.form-cigarette').style.display = 'none';
    }
})

const button = form.formBtn
button.addEventListener('click', e => {
    const nameValid = regexNameSurnameValidate.test(nameElem.value);
    const surnameValid = regexNameSurnameValidate.test(surnameElem.value);

    if (!(nameValid && surnameValid)) {
        document.querySelector('.error-name').style.display = 'block';
        document.querySelector('.error-surname').style.display = 'block';
    }

    if (ageElem.value < 14 || ageElem.value > 100) {
        document.querySelector('.error-age').style.display = 'block';
    }

    if (!(genderElem[0].checked && genderElem[1].checked)) {
        document.querySelector('.error-gender-man').style.display = 'block';
        document.querySelector('.error-gender-woman').style.display = 'block';
    }

    const brandValid = regexBrandValidate.test(cigaretteBrandElem.value);
    if (!brandValid) {
        document.querySelector('.error-brand-cigarette').style.display = 'block';
    }

    const emailValid = regexEmailValidate.test(emailElem.value);
    if (!emailValid) {
        document.querySelector('.error-email').style.display = 'block';
    }
});