const form = document.getElementById('registration-form');

//have an issue with this script, trying to work it out, kindly assist if you can identify the error here. thank you

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve form values
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const presentAddress = document.getElementById('present-address').value;
  const streetAddress = document.getElementById('street-address').value;
  const course = document.getElementById('course').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if all fields are filled
  if (firstName === '' || lastName === '' || dob === '' || email === '' || gender === '' || presentAddress === '' || streetAddress === '' || course === '' || username === '' || password === '') {
    alert('Please fill in all fields.');
  }

  else{
    // Display success message
alert('Form submitted successfully.');
}


});

  