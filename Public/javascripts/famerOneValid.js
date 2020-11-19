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
const activ = document.farmerOne.activities;
const dateReg = document.farmerOne.dateOfReg;
const StayPeriod = document.farmerOne.periodOfStay;

//Error Display picked from Id of errors in form
const fName_error = document.getElementById('fName');
const lName_error = document.getElementById('lName');
const Name_error = document.getElementById('Name');
const Pwd_error = document.getElementById('Pwd');
const PwdConf_error = document.getElementById('PwdConf');
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
passConfirm.addEventListener('blur', Pwd_Verify, true);
gender.addEventListener('blur', gder_Verify, true);
dateBirth.addEventListener('blur', Dob_Verify, true);
nin.addEventListener('blur', niN_Verify, true);
phone.addEventListener('blur', phne_Verify, true);
address.addEventListener('blur', addres_Verify, true);
resident.addEventListener('blur', resid_Verify, true);
UrbanWard.addEventListener('blur', wad_Verify, true);
foNo.addEventListener('blur', phne_Verify, true);
activities.addEventListener('blur', fAct_Verify, true);
dateReg.addEventListener('blur', dor_Verify, true);
StayPeriod.addEventListener('blur', Stay_verify, true);

//validations
function Validate() {
  //fName validation
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
  // if (pass.value == '') {
  //   pass.style.border = '1px solid red';
  //   pwd_error.textContent = 'Password is required';
  //   pass.focus();
  //   return false;
  // }

  //password match
  // if (pass.value != passConfirm.value) {
  //   pass.style.border = '1px solid red';
  //   passConfirm.style.border = '1px solid red';
  //   pwdConf_error.innerHTML = 'Password not the same';
  //   passConfirm.focus();
  //   return false;
  // }

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

  // if (resident.value == '') {
  //   resident.style.border = '1px solid red';
  //   resident_error.textContent = 'Phone is required';
  //   resident.focus();
  //   return false;
  // }

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

  if (StayPeriod.value == '') {
    StayPeriod.style.border = '1px solid red';
    period_error.textContent = 'Phone is required';
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

  // Event Handlers
  function fName_Verify() {
    if (fname.value != '') {
      fname.style.border = '1px solid #ffc107';
      fName_error.innerHTML = '';
      return true;
    }
  }

  function lName_Verify() {
    if (lname.value != '') {
      lname.style.border = '1px solid #ffc107';
      lName_error.innerHTML = '';
      return true;
    }
  }

  // function pwd_Verify() {
  //   if (pass.value != '') {
  //     pass.style.border = '1px solid #ffc107';
  //     pass_error.innerHTML = '';
  //     return true;
  //   }
  // }
}
