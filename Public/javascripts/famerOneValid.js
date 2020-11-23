//Picked from the name of input
const fname = document.farmerOne.firstName;
const lname = document.farmerOne.lastName;
const Username = document.farmerOne.username;
const pass = document.farmerOne.password;
const passConfirm = document.farmerOne.confirmPassword;
const gender = document.farmerOne.gender;
const dateBirth = document.farmerOne.dateOfBirth;
const nin = document.farmerOne.nin;
const phone = document.farmerOne.phone;
const address = document.farmerOne.address;
const resident = document.farmerOne.residenceType;
const UrbanWard = document.farmerOne.ward;
const foNo = document.farmerOne.fOnumber;
// const activ = document.farmerOne.activities;
const dateReg = document.farmerOne.dateOfReg;
const StayPeriod = document.farmerOne.periodOfStay;

//Error Display picked from Id of errors in form
const fName_error = document.getElementById('fName');
const lName_error = document.getElementById('lName');
const Name_error = document.getElementById('Name');
const Pwd_error = document.getElementById('Pwd');
const PwdConf_error = document.getElementById('pwdConf');
const gder_error = document.getElementById('gend');
const Dob_error = document.getElementById('dtb');
const niN_error = document.getElementById('ni');
const phne_error = document.getElementById('phon');
const addres_error = document.getElementById('addr');
const resident_error = document.getElementById('rad');
const wad_error = document.getElementById('wad');
const fo_ID = document.getElementById('fone');
const fAct_error = document.getElementById('act');
const period_error = document.getElementById('ptay');
const dor_error = document.getElementById('dReg');

//Event Listners got from consts
fname.addEventListener('blur', fName_Verify, true);
lname.addEventListener('blur', lName_Verify, true);
Username.addEventListener('blur', Name_Verify, true);
pass.addEventListener('blur', Pwd_Verify, true);
passConfirm.addEventListener('blur', PwdConf_Verify, true);
gender.addEventListener('blur', gder_Verify, true);
dateBirth.addEventListener('blur', Dob_Verify, true);
nin.addEventListener('blur', niN_Verify, true);
phone.addEventListener('blur', phne_Verify, true);
address.addEventListener('blur', addres_Verify, true);
// resident.addEventListener('blur', resid_Verify, true);
UrbanWard.addEventListener('blur', wad_Verify, true);
foNo.addEventListener('blur', fo_Verify, true);
// activ.addEventListener('blur', fAct_Verify, true);
StayPeriod.addEventListener('blur', Stay_Verify, true);
dateReg.addEventListener('blur', dor_Verify, true);

//validations
function Validate() {
  //fName validation(checking empty)
  if (fname.value == '') {
    fname.style.border = '1px solid red';
    fName_error.textContent = 'First Name is required';
    fname.focus();
    return false;
  }
  //lName validation
  if (lname.value == '') {
    lname.style.border = '1px solid red';
    lName_error.textContent = 'Last Name is required';
    lname.focus();
    return false;
  }

  //userName validation
  if (Username.value == '') {
    Username.style.border = '1px solid red';
    Name_error.textContent = 'Username is required';
    Username.focus();
    return false;
  }

  // password validation
  if (pass.value == '') {
    pass.style.border = '1px solid red';
    Pwd_error.textContent = 'Password is required';
    pass.focus();
    return false;
  }

  // password match
  if (pass.value != passConfirm.value) {
    pass.style.border = '1px solid red';
    passConfirm.style.border = '1px solid red';
    PwdConf_error.innerHTML = 'Password not the same';
    passConfirm.focus();
    return false;
  }

  if (gender.value == 'default') {
    gender.style.border = '1px solid red';
    gder_error.textContent = 'Select gender';
    gender.focus();
    return false;
  }

  if (dateBirth.value == '') {
    dateBirth.style.border = '1px solid red';
    Dob_error.textContent = 'Date of birth is required';
    dateBirth.focus();
    return false;
  }

  if (nin.value == '') {
    nin.style.border = '1px solid red';
    niN_error.textContent = 'NIN is required';
    nin.focus();
    return false;
  }

  if (phone.value == '') {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone is required';
    phone.focus();
    return false;
  }

  if (address.value == '') {
    address.style.border = '1px solid red';
    addres_error.textContent = 'Address is required';
    address.focus();
    return false;
  }

  if (resident.checked == false) {
    // resident.style.border = '1px solid red';
    resident_error.textContent = 'Phone is required';
    resident.focus();
    return false;
  }

  if (UrbanWard.value == 'selectWard') {
    UrbanWard.style.border = '1px solid red';
    wad_error.textContent = 'Select Ward';
    UrbanWard.focus();
    return false;
  }

  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    fo_ID.textContent = 'FO number is required';
    foNo.focus();
    return false;
  }

  if (activ.value == 'selectAct') {
    activ.style.border = '1px solid red';
    fAct_error.textContent = 'Select Activity';
    activ.focus();
    return false;
  }

  if (dateReg.value == '') {
    dateReg.style.border = '1px solid red';
    dor_error.textContent = 'Date of Registration required';
    dateReg.focus();
    return false;
  }

  if (StayPeriod.value == 'selectPeriod') {
    StayPeriod.style.border = '1px solid red';
    period_error.textContent = 'Select Period of stay';
    StayPeriod.focus();
    return false;
  }

  //policy checkbox validation
  //   if (policy.checked != true) {
  //     policy_error.textContent = 'Please select terms and conditions';
  //     policy.focus();
  //     return false;
  //   }
  // }
}

// Regexes
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number

// Event Handlers
function fName_Verify() {
  if (fname.value != '' && fname.value.match(nameRegex)) {
    fname.style.border = '1px solid #98FB98';
    fName_error.innerHTML = '';
    return true;
  } else {
    fname.style.border = '1px solid red';
    fName_error.textContent = 'first Name must be between 5 to 50 characters';
    return false;
  }
}

function lName_Verify() {
  if (lname.value != '' && lname.value.match(nameRegex)) {
    lname.style.border = '1px solid #98FB98';
    lName_error.innerHTML = '';
    return true;
  } else {
    lname.style.border = '1px solid red';
    lName_error.textContent = 'last Name must be between 5 to 50 characters';
  }
}

function Name_Verify() {
  if (Username.value != '' && Username.value.match(alphaNumeric)) {
    Username.style.border = '1px solid #98FB98';
    Name_error.innerHTML = '';
    return true;
  } else {
    Username.style.border = '1px solid red';
    Name_error.textContent = 'User Name must be alpha Numeric characters';
  }
}

function Pwd_Verify() {
  if (pass.value != '') {
    pass.style.border = '1px solid #98FB98';
    Pwd_error.innerHTML = '';
    return true;
  }
}

function PwdConf_Verify() {
  if (passConfirm.value != '') {
    passConfirm.style.border = '1px solid #98FB98';
    PwdConf_error.innerHTML = '';
    return true;
  }
}

function gder_Verify() {
  if (gender.value != '') {
    gender.style.border = '1px solid #98FB98';
    gder_error.innerHTML = '';
    return true;
  }
}

function Dob_Verify() {
  if (dateBirth.value != '') {
    dateBirth.style.border = '1px solid #98FB98';
    Dob_error.innerHTML = '';
    return true;
  }
}

function niN_Verify() {
  if (nin.value != '' && nin.value.match(ninRegex)) {
    nin.style.border = '1px solid #98FB98';
    niN_error.innerHTML = '';
    return true;
  } else {
    nin.style.border = '1px solid red';
    niN_error.textContent = 'Nin must be 13 alpha Numeric characters';
  }
}

function phne_Verify() {
  if (phone.value != '' && phone.value.match(phoneRegex)) {
    phone.style.border = '1px solid #98FB98';
    phne_error.innerHTML = '';
    return true;
  } else {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone number must be 10 numbers';
  }
}

function addres_Verify() {
  if (address.value != '') {
    address.style.border = '1px solid #98FB98';
    addres_error.innerHTML = '';
    return true;
  }
}

// function resid_Verify() {
//   if (resident.value != '') {
//     resident.style.border = '1px solid #98FB98';
//     resident_error.innerHTML = '';
//     return true;
//   }
// }
// Accesing properties by form name and assigning it to rR to give an array of elements
// var valid = false;
// //Looping through
// for (var i = 0; i < resident.length; i++) {
//   if (resident[i].checked) {
//     valid = true;
//     break;
//   }
// }
// if (valid) {
// } else {
//   document.getElementById('rad').innerHTML = 'Please select residence type';
//   return false;
// }








function wad_Verify() {
  if (UrbanWard.value != '') {
    UrbanWard.style.border = '1px solid #98FB98';
    wad_error.innerHTML = '';
    return true;
  }
}

function fo_Verify() {
  if (foNo.value != '') {
    foNo.style.border = '1px solid #98FB98';
    fo_ID.innerHTML = '';
    return true;
  }
}

function fAct_Verify() {
  if (activ.value != '') {
    activ.style.border = '1px solid #98FB98';
    fAct_error.innerHTML = '';
    return true;
  }
}

function Stay_Verify() {
  if (StayPeriod.value != '' && StayPeriod.value != '2') {
    StayPeriod.style.border = '1px solid #98FB98';
    period_error.innerHTML = '';
    return true;
  } else {
    StayPeriod.style.border = '1px solid red';
    period_error.textContent = 'Period of stay must be greater than 10 years';
  }
}

function dor_Verify() {
  if (dateReg.value != '') {
    dateReg.style.border = '1px solid #98FB98';
    dor_error.innerHTML = '';
    return true;
  }
}
