const uFarm = () => {
  //Accessing the form properties by form name and property name.
  const uFarmerName = document.uForm.userName;
  const dob = document.uForm.dateBirth;
  const uDateReg = document.uForm.dateReg;
  const uNin = document.uForm.nin;
  const uPhone = document.uForm.phone;
  const uId = document.uForm.id;
  const uAct = document.getElementById('activities');
  const uGender = document.getElementById('gender');
  const uWard = document.getElementById('ward');

  //Initializing a constant regex for userName.
  const nameRegex = /^[0-9a-zA-Z]+$/;

  //   Checking if user name is empty conditions of regex
  if (uFarmerName.value.trim() == '');
  {
    uFarmerName.style.border = 'red';
    // return false;
  }

  //   Checking conditions of regex
  if (uFarmerName.value.match(nameRegex)) {
    uFarmerName.style.border = '2px solid #00FF00';
  } else {
    uFarmerName.style.border = '2px solid red';
    document.getElementById('usename').innerHTML =
      'Please fill in correct name';
  }

  // Match the date format through regular expression (Dates).
  const dateRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  if (dob.value.match(dateRegex)) {
    dob.style.border = '2px solid #00FF00';
  } else {
    dob.style.border = '2px solid red';
    document.getElementById('doB').innerHTML =
      'Please fill in correct date of birth';
  }

  //Date of registration.
  if (uDateReg.value.match(dateRegex)) {
    uDateReg.style.border = '2px solid #00FF00';
  } else {
    uDateReg.style.border = '2px solid red';
    document.getElementById('dreg').innerHTML =
      'Please fill in correct date of registration';
  }

  // If function for gender.
  if (uGender.value == 'selectGender') {
    uGender.style.border = '2px solid red';
    document.getElementById('gend').innerHTML = 'Please select gender';
    // return false;
  } else {
    uGender.style.border = '2px solid #00FF00';
  }

  //Initializing a constant regex for phone.(working).
  const phoneRegex = /^\d{10}$/;

  if (uPhone.value.match(phoneRegex)) {
    uPhone.style.border = '2px solid #00FF00';
  } else {
    uPhone.style.border = '2px solid red';
    document.getElementById('phn').innerHTML = 'Please select correct gender';
  }

  const alphaNumeric = /^[0-9a-zA-Z]+$/;

  // if function for Id ( working)
  if (uId.value.match(alphaNumeric)) {
    uId.style.border = '2px solid #00FF00';
  } else {
    uId.style.border = '2px solid red';
    document.getElementById('uiD').innerHTML =
      'Please fill in correct date of birth';
  }

  //   if function for nin.
  if (uNin.value.match(alphaNumeric)) {
    uNin.style.border = '2px solid #00FF00';
  } else {
    uNin.style.border = '2px solid red';
    document.getElementById('niN').innerHTML = 'Please fill in NIN';
  }

  // function for ward.
  if (uWard.value == 'selectWard') {
    uWard.style.border = '2px solid red';
    document.getElementById('wd').innerHTML = 'Please select a ward';
  } else {
    uWard.style.border = '2px solid #00FF00';
  }

  // function for activities.
  if (uAct.value == 'selectAct') {
    uAct.style.border = '2px solid red';
    document.getElementById('sAct').innerHTML = 'Please select an activity';
  } else {
    uAct.style.border = '2px solid #00FF00';
  }
};
