const uFarm = () => {
  //
  const fname = document.farmerOne.firstName;
  const lname = document.farmerOne.lastName;
  const Username = document.farmerOne.username;
  const pass = document.farmerOne.password;
  const passConfirm = document.farmerOne.confirm_password;
  const gender = document.farmerOne.gender;
  const dateBirth = document.farmerOne.dateOfBirth;
  const nin = document.farmerOne.nin;
  const phone = document.farmerOne.phone;
  const address = document.farmerOne.address;
  const resident = document.farmerOne.residenceType;
  const UrbanWard = document.farmerOne.ward;
  const foNo = document.farmerONe.fOnumber;
  const activites = document.farmerOne.Activities;
  const dateBirth = document.farmerOne.dateOfReg;
  const StayPeriod = document.farmerOne.periodOfStay;

  //Error Display
  const fName_error = document.getElementById('firstname');
  const lName_error = document.getElementById('lastname');
  const Name_error = document.getElementById('userName');
  const Pwd_error = document.getElementById('pwd');
  const gder_error = document.getElementById('gnder');
  const Dob_error = document.getElementById('dob');
  const niN_error = document.getElementById('nin_no');
  const phne_error = document.getElementById('phn');
  const addres_error = document.getElementById('addre');
  // const resident_error = document.getElementById('Restype');
  const wad_error = document.getElementById('uWard');
  const fo_ID = document.getElementById('foID');
  const fAct_error = document.getElementById('act');
  const period_error = document.getElementById('StayPeriod');
  const dor_error = document.getElementById('dor');

  //Event Listners
  fName.addEventListener('blur', fName_Verify, true);
  lName.addEventListener('blur', lName_Verify, true);
  // Uemail.addEventListener('blur', emailVerify, true);
  Name.addEventListener('blur', Name_Verify, true);
  Pwd.addEventListener('blur', Pwd_Verify, true);
  gder.addEventListener('blur', gder_Verify, true);
  Dob.addEventListener('blur', Dob_Verify, true);
  niN.addEventListener('blur', niN_Verify, true);
  phne.addEventListener('blur', phne_Verify, true);
  addres.addEventListener('blur', addres_Verify, true);
  wad.addEventListener('blur', wad_Verify, true);
  fo.addEventListener('blur', phne_Verify, true);
  fAct.addEventListener('blur', fAct_Verify, true);
  period.addEventListener('blur', period_Verify, true);
  dor.addEventListener('blur', dor_Verify, true);

  //validations
  function Validate() {
    //fName validation
    if (fName.value == '') {
      fName.style.border = '1px solid red';
      fName_error.textContent = 'First Name is required';
      fName.focus();
      return false;
    }
    //lName validation
    if (lName.value == '') {
      lName.style.border = '1px solid red';
      lName_error.textContent = 'Last Name is required';
      lName.focus();
      return false;
    }

    //userName validation
    if (Name.value == '') {
      Name.style.border = '1px solid red';
      Name_error.textContent = 'Username is required';
      Name.focus();
      return false;
    }

    //password validation
    if (pwd.value == '') {
      pass.style.border = '1px solid red';
      pass_error.textContent = 'Password is required';
      pass.focus();
      return false;
    }

    //password match
    if (pass.value != passConfirm.value) {
      pass.style.border = '1px solid red';
      passConfirm.style.border = '1px solid red';
      pass_error.innerHTML = 'Password not the same';
      passConfirm.focus();
      return false;
    }

    if (gder.value == '') {
      gder.style.border = '1px solid red';
      gder_error.textContent = 'Select gender';
      gder.focus();
      return false;
    }

    if (Dob.value == '') {
      Dob.style.border = '1px solid red';
      Dob_error.textContent = 'Date of birth is required';
      Dob.focus();
      return false;
    }

    if (niN.value == '') {
      niN.style.border = '1px solid red';
      niN_error.textContent = 'NIN is required';
      niN.focus();
      return false;
    }

    if (phne.value == '') {
      phne.style.border = '1px solid red';
      phne_error.textContent = 'Phone is required';
      phne.focus();
      return false;
    }

    //policy checkbox validation
    //   if (policy.checked != true) {
    //     policy_error.textContent = 'Please select terms and conditions';
    //     policy.focus();
    //     return false;
    //   }
    // }

    //Event Handlers
    function fName_Verify() {
      if (fName.value != '') {
        fName.style.border = '1px solid #ffc107';
        fName_error.innerHTML = '';
        return true;
      }
    }

    function lName_Verify() {
      if (lName.value != '') {
        lName.style.border = '1px solid #ffc107';
        lName_error.innerHTML = '';
        return true;
      }
    }

    // function emailVerify() {
    //   if (Uemail.value != '') {
    //     Uemail.style.border = '1px solid #ffc107';
    //     email_error.innerHTML = '';
    //     return true;
    //   }
    // }

    function pwd_Verify() {
      if (pass.value != '') {
        pass.style.border = '1px solid #ffc107';
        pass_error.innerHTML = '';
        return true;
      }
    }
  }
};
