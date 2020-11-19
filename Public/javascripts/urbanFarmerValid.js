// Acessing the DOM by formname and element name
const fname = document.urbanFarm.firstname;
const lname = document.urbanFarm.lastname;
const Username = document.urbanFarm.username;
const pass = document.urbanFarm.password;
const passConfirm = document.urbanFarm.confirmPassword;
const gender = document.urbanFarm.gender;
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
const Pwd_error = document.getElementById('Pwd');
const PwdConf_error = document.getElementById('PwdConf');
const gder_error = document.getElementById('gend');
const Dob_error = document.getElementById('dtb');
const niN_error = document.getElementById('niN');
const phne_error = document.getElementById('phon');
// const addres_error = document.getElementById('addr');
// const resident_error = document.getElementById('rad');
const wad_error = document.getElementById('wd');
const fo_ID = document.getElementById('uiD');
const fAct_error = document.getElementById('sAct');
const dor_error = document.getElementById('dReg');
// const period_error = document.getElementById('ptay');

//Event Listners got from consts
fname.addEventListener('blur', fName_Verify, true);
lname.addEventListener('blur', lName_Verify, true);
// Uemail.addEventListener('blur', emailVerify, true);
Username.addEventListener('blur', Name_Verify, true);
pass.addEventListener('blur', Pwd_Verify, true);
passConfirm.addEventListener('blur', Pwd_Verify, true);
gender.addEventListener('blur', gder_Verify, true);
dateBirth.addEventListener('blur', Dob_Verify, true);
nin.addEventListener('blur', niN_Verify, true);
phone.addEventListener('blur', phne_Verify, true);
UrbanWard.addEventListener('blur', wad_Verify, true);
foNo.addEventListener('blur', phne_Verify, true);
activ.addEventListener('blur', fAct_Verify, true);
// period.addEventListener('blur', period_Verify, true);
dateReg.addEventListener('blur', dor_Verify, true);

function Validate() {
    // fname validation
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
  if (pass.value == '') {
    pass.style.border = '1px solid red';
    pwd_error.textContent = 'Password is required';
    pass.focus();
    return false;
  }

  //password match
  if (pass.value != passConfirm.value) {
    pass.style.border = '1px solid red';
    passConfirm.style.border = '1px solid red';
    pwdConf_error.innerHTML = 'Password not the same';
    passConfirm.focus();
    return false;
  }

  if (gender.value == 'selectGender') {
    gender.style.border = '1px solid red';
    gder_error.textContent = 'Select gender';
    gder.focus();
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


  if (UrbanWard.value == 'selectWard') {
    UrbanWard.style.border = '1px solid red';
    wad_error.textContent = 'Select Ward';
    UrbanWard.focus();
    return false;
  }

  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    fo_ID.textContent = 'Unique ID is required';
    foNo.focus();
    return false;
  }

  if (activ.value == 'selectAct') {
    activ.style.border = '1px solid red';
    fAct_error.textContent = 'Select Activities';
    activ.focus();
    return false;
  }

  if (dateReg.value == '') {
    dateReg.style.border = '1px solid red';
    dor_error.textContent = 'Date is required';
    dateReg.focus();
    return false;
  }

    
}