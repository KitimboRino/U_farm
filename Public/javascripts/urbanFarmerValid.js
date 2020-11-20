// Acessing the DOM by formname and element name
const fname = document.urbanFarm.firstname;
const lname = document.urbanFarm.lastname;
const Username = document.urbanFarm.username;
const pass = document.urbanFarm.password;
const passConfirm = document.urbanFarm.confirmPassword;
const gendr = document.urbanFarm.gender;
const dateBirth = document.urbanFarm.dateOfBirth;
const nin = document.urbanFarm.nin;
const phone = document.urbanFarm.phone;
const UrbanWard = document.urbanFarm.ward;
const foNo = document.urbanFarm.id;
const activ = document.urbanFarm.activities;
const dateReg = document.urbanFarm.dateOfReg;

//Error Display picked from Id of errors in form
const fName_error = document.getElementById('fName');
const lName_error = document.getElementById('lName');
const Name_error = document.getElementById('Name');
const Pwd_error = document.getElementById('pwd');
const PwdConf_error = document.getElementById('pwdConf');
const gder_error = document.getElementById('gend');
const Dob_error = document.getElementById('dtb');
const niN_error = document.getElementById('niN');
const phne_error = document.getElementById('phon');
const wad_error = document.getElementById('wd');
const fo_ID = document.getElementById('uiD');
const fAct_error = document.getElementById('sAct');
const dor_error = document.getElementById('dReg');
// const period_error = document.getElementById('ptay');

//Event Listners got from consts
fname.addEventListener('blur', fName_Verify, true);
lname.addEventListener('blur', lName_Verify, true);
Username.addEventListener('blur', Name_Verify, true);
pass.addEventListener('blur', Pwd_Verify, true);
passConfirm.addEventListener('blur', PwdConf_Verify, true);
gendr.addEventListener('blur', gder_Verify, true);
dateBirth.addEventListener('blur', Dob_Verify, true);
nin.addEventListener('blur', niN_Verify, true);
phone.addEventListener('blur', phne_Verify, true);
UrbanWard.addEventListener('blur', wad_Verify, true);
foNo.addEventListener('blur', uID_Verify, true);
activ.addEventListener('blur', fAct_Verify, true);
dateReg.addEventListener('blur', dor_Verify, true);

function Validate() {
  // fname validation
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

  //password validation
  if (pass.value == '') {
    pass.style.border = '1px solid red';
    Pwd_error.textContent = 'Password is required';
    pass.focus();
    return false;
  }

  //password match
  if (pass.value != passConfirm.value) {
    pass.style.border = '1px solid red';
    passConfirm.style.border = '1px solid red';
    PwdConf_error.innerHTML = 'Password not the same';
    passConfirm.focus();
    return false;
  }

  //Gender
  if (gender.value == 'selectGender') {
    gendr.style.border = '1px solid red';
    gder_error.textContent = 'Select gender';
    gendr.focus();
    return false;
  }

  // Date of birth
  if (dateBirth.value == '') {
    dateBirth.style.border = '1px solid red';
    Dob_error.textContent = 'Date of birth is required';
    dateBirth.focus();
    return false;
  }

  // Nin number
  if (nin.value == '') {
    nin.style.border = '1px solid red';
    niN_error.textContent = 'NIN is required';
    nin.focus();
    return false;
  }

  // Phone number
  if (phone.value == '') {
    phone.style.border = '1px solid red';
    phne_error.textContent = 'Phone is required';
    phone.focus();
    return false;
  }

  // Urban Ward
  if (UrbanWard.value == 'selectWard') {
    UrbanWard.style.border = '1px solid red';
    wad_error.textContent = 'Select Ward';
    UrbanWard.focus();
    return false;
  }

  // Unique ID
  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    fo_ID.textContent = 'Unique ID is required';
    foNo.focus();
    return false;
  }

  // Activities
  if (activ.value == 'selectAct') {
    activ.style.border = '1px solid red';
    fAct_error.textContent = 'Select Activities';
    activ.focus();
    return false;
  }

  // Date of registration
  if (dateReg.value == '') {
    dateReg.style.border = '1px solid red';
    dor_error.textContent = 'Date is required';
    dateReg.focus();
    return false;
  }
}

// Event Handlers for correct data
// First name
function fName_Verify() {
  if (fname.value != '') {
    fname.style.border = '1px solid #98FB98';
    fName_error.innerHTML = '';
    return true;
  }
}

// Last name
function lName_Verify() {
  if (lname.value != '') {
    lname.style.border = '1px solid #98FB98';
    lName_error.innerHTML = '';
    return true;
  }
}

// User name
function Name_Verify() {
  if (Username.value != '') {
    Username.style.border = '1px solid #98FB98';
    Name_error.innerHTML = '';
    return true;
  }
}

// Password
function Pwd_Verify() {
  if (pass.value != '') {
    pass.style.border = '1px solid #98FB98';
    Pwd_error.innerHTML = '';
    return true;
  }
}

// Password confirm
function PwdConf_Verify() {
  if (passConfirm.value != '') {
    passConfirm.style.border = '1px solid #98FB98';
    PwdConf_error.innerHTML = '';
    return true;
  }
}

// Gender verify
function gder_Verify() {
  if (gender.value != '') {
    gender.style.border = '1px solid #98FB98';
    gder_error.innerHTML = '';
    return true;
  }
}

// Date of birth
function Dob_Verify() {
  if (dateBirth.value != '') {
    dateBirth.style.border = '1px solid #98FB98';
    Dob_error.innerHTML = '';
    return true;
  }
}

// Nin number
function niN_Verify() {
  if (nin.value != '') {
    nin.style.border = '1px solid #98FB98';
    niN_error.innerHTML = '';
    return true;
  }
}

// Phone number
function phne_Verify() {
  if (phone.value != '') {
    phone.style.border = '1px solid #98FB98';
    phne_error.innerHTML = '';
    return true;
  }
}

// Address
function addres_Verify() {
  if (address.value != '') {
    address.style.border = '1px solid #98FB98';
    addres_error.innerHTML = '';
    return true;
  }
}

// Ward
function wad_Verify() {
  if (UrbanWard.value != '') {
    UrbanWard.style.border = '1px solid #98FB98';
    wad_error.innerHTML = '';
    return true;
  }
}

// Unique ID
function uID_Verify() {
  if (foNo.value != '') {
    foNo.style.border = '1px solid #98FB98';
    fo_ID.innerHTML = '';
    return true;
  }
}

// Activities
function fAct_Verify() {
  if (activ.value != '') {
    activ.style.border = '1px solid #98FB98';
    fAct_error.innerHTML = '';
    return true;
  }
}

function dor_Verify() {
  if (dateReg.value != '') {
    dateReg.style.border = '1px solid #98FB98';
    dor_error.innerHTML = '';
    return true;
  }
}
