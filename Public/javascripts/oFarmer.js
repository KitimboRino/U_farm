const uFarm = () => {
  //Accessing the form properties by form name and property name.
  const oFarmerName = document.oForm.userName;
  const dob = document.oForm.dateOfBirth;
  const uDateReg = document.oForm.dateOfReg;
  const uNin = document.oForm.nin;
  const uPhone = document.oForm.phone;
  const uId = document.oForm.fOnumber;
  const addRes = document.oForm.address;
  const pOfStay = document.oForm.periodOfStay;
  const uAct = document.oForm.activities;
  const uGender = document.getElementById('gender');
  const uWard = document.oForm.ward;

  const oPerm = document.getElementById('perm');
  const oTemp = document.getElementById('temp');

  //Initializing a constant regex (5-50 characters) for userName.
  const nameRegex = /^.{5,50}[0-9a-zA-Z]+$/;

  //   Checking if user name is empty conditions of regex
  if (oFarmerName.value.trim() == '');
  {
    oFarmerName.style.border = 'red';
  }

  // Checking conditions of regex.
  if (oFarmerName.value.match(nameRegex)) {
    oFarmerName.style.border = '2px solid #00FF00';
  } else {
    oFarmerName.style.border = '2px solid red';
    document.getElementById('usename').innerHTML =
      'Please fill the username field';
  }

  // Match the date format through regular expression (Dates).
  const dateRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  // Function for date of birth.
  if (dob.value.match(dateRegex)) {
    dob.style.border = '2px solid #00FF00';
  } else {
    dob.style.border = '2px solid red';
    document.getElementById('dtb').innerHTML =
      'Please fill correct date of birth';
  }

  // Regex for period of Stay
  const psRegex = /^\d{10,}$/;

  // Function for period of stay.
  if (pOfStay.value.match(psRegex)) {
    pOfStay.style.border = '2px solid #00FF00';
  } else {
    pOfStay.style.border = '2px solid red';
    document.getElementById('ptay').innerHTML =
      'Please select period of stay';
  }

  // If function for date of registration
  if (uDateReg.value.match(dateRegex)) {
    uDateReg.style.border = '2px solid #00FF00';
  } else {
    uDateReg.style.border = '2px solid red';
    document.getElementById('dReg').innerHTML =
      'Please fill correct date of registration';
  }

  // If function for gender.
  if (uGender.value == 'default') {
    uGender.style.border = '2px solid red';
    document.getElementById('gend').innerHTML = 'Please select gender';
    // return false;
  } else {
    uGender.style.border = '2px solid #00FF00';
    // return true;
  }

  //Initializing a constant regex for phone.
  const phoneRegex = /^\d{10}$/;

  //If function for phone number.
  if (uPhone.value.match(phoneRegex)) {
    uPhone.style.border = '2px solid #00FF00';
  } else {
    document.getElementById('phon').innerHTML =
      'Please fill correct phone number';
    uPhone.style.border = '2px solid red';
    // return false;
  }

  const alphaNumeric = /^[0-9a-zA-Z]+$/;

  // If function for Id
  if (uId.value.match(alphaNumeric)) {
    uId.style.border = '2px solid #00FF00';
  } else {
    uId.style.border = '2px solid red';
    document.getElementById('fone').innerHTML = 'Please fill correct FO number';
    // return false;
  }

  // If function for NIN.
  if (uNin.value.match(alphaNumeric)) {
    uNin.style.border = '2px solid #00FF00';
  } else {
    uNin.style.border = '2px solid red';
    document.getElementById('ni').innerHTML = 'Please fill correct NIN';
    // return false;
  }

  // If function for ward
  if (uWard.value == 'selectWard') {
    uWard.style.border = '2px solid red';
    document.getElementById('wad').innerHTML = 'Please select ward';
  } else {
    uWard.style.border = '2px solid #00FF00';
    // return false;
  }

  // If function for address.
  if (addRes.value.match(alphaNumeric)) {
    addRes.style.border = '2px solid #00FF00';
  } else {
    addRes.style.border = '2px solid red';
    document.getElementById('addr').innerHTML = 'Please fill correct address';
  }

  // If function for Activities.
  if (uAct.value == 'selectAct') {
    uAct.style.border = '2px solid red';
    document.getElementById('act').innerHTML = 'Please select activity';
  } else {
    uAct.style.border = '2px solid #00FF00';
  }

  // Accesing properties by form name and assigning it to rR to give an array of elements
  var valid = false;
  var rR = document.oForm.residenceType;
  //Looping through
  for (var i = 0; i < rR.length; i++) {
    if (rR[i].checked) {
      valid = true;
      break;
    }
  }
  if (valid) {
  } else {
    document.getElementById('rad').innerHTML = 'Please select residence type';
    return false;
  }
};
