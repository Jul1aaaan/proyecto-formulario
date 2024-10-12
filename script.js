const submitFunction = (event) => {
    if(!validateForm()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(
            `Sent data was: \n` +
            `Name: ${document.getElementById('name').value} \n` +
            `Surname: ${document.getElementById('surname').value} \n` +
            `Identification: ${document.getElementById('identification').value} \n` +
            `Email: ${document.getElementById('email').value} \n` +
            `Age: ${document.getElementById('age').value} \n` +
            `Activity: ${document.getElementById('activity').value} \n` +
            `Level of Study: ${document.getElementById('levelStudy').value} \n`
        );

    }
    event.preventDefault(); // prevent refresh of web
}

document.getElementById('form').addEventListener('submit', submitFunction); // listen the sending form

function validateForm(){

    // this validate the field text
    const textFields = document.querySelectorAll('input[type="text"');
    let correctValidation = true;

    textFields.forEach(field => {
        let fieldError = document.getElementById('error' + field.id.charAt(0).toUpperCase() + field.id.slice(1)); // error + id with the first letter in uppercase
        if(field.value.length == ''){
            showError(fieldError, 'This field is required!');
            correctValidation = false;
        }else if(field.value.length > 0 && field.value.length < 4){
            showError(fieldError, 'This field must be at least 3 characters!');
            correctValidation = false;
        }else{
            hideError(fieldError);
        }
    })

    // this validate the field email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // this regular expression validate the format of the email
        hideError(errorEmail);
    }else{
        showError(errorEmail, 'This email is invalid!');
        correctValidation = false;
    }

    // this validate the field age
    const age = document.getElementById('age');
    const errorAge = document.getElementById('errorAge');

    if(age.value < 18){
        showError(errorAge, 'You must be over 18 years old to register')
        correctValidation = false;
    }else{
        hideError(errorAge);
    }

    // this validate the field activity
    const activity = document.getElementById('activity');
    const errorActivity = document.getElementById('errorActivity');

    if(activity.value == ''){
        showError(errorActivity, 'Please, choose an activity');
        correctValidation = false;
    }else{
        hideError(errorActivity);
    }
    
    // this validate the field level of study
    const levelStudy = document.getElementById('levelStudy');
    const errorLevelStudy = document.getElementById('errorLevelStudy');
    
    if(levelStudy.value == ''){
        showError(errorLevelStudy, 'Please, choose a level of study');
        correctValidation = false;
    }else{
        hideError(errorLevelStudy);
    }

    // this validate the field aceppt terms
    const acceptTerms = document.getElementById('acceptTerms');
    const errorAcceptTerms = document.getElementById('errorAcceptTerms');

    if(!acceptTerms.checked){
        showError(errorAcceptTerms, 'You must to accept the terms and conditions');
        correctValidation = false;
    }else{
        hideError(errorAcceptTerms);
    }

    return correctValidation; 
    
}

const showError = (element, message) => {
    element.textContent = message;
    element.style.display = 'block';
}
const hideError = (element) => {
    element.textContent = '';
    element.style.display = 'none';
}

