const uFarm = () => {
  //Accessing the form properties by form name and property name.
  const oFarmerName = document.oForm.userName;
  const uDateUp = document.oForm.dateOfUpload;
  const uPhone = document.oForm.phone;
  const uPriceK = document.oForm.unitPrice;
  const addRes = document.oForm.address;
  const famQuant = document.oForm.quantity;
  const uProd = document.getElementById('produce');
  const uModeP = document.getElementById('modeP');
  const uWard = document.getElementById('ward');

  //Initializing a constant regex for userName.
  const nameRegex =  /^\w{5,50}$/;

  // Checking if user name is empty conditions of regex
  if (oFarmerName.value.trim() == '');
  {
    oFarmerName.style.border = 'red';
    // return false;
  }

  // Checking conditions of regex.
  if (oFarmerName.value.match(nameRegex)) {
    oFarmerName.style.border = '2px solid #00FF00';
  } else {
    oFarmerName.style.border = '2px solid red';
    document.getElementById('usename').innerHTML = 'Please input produce name';
  }

  // Match the date format through regular expression (Dates).
  const dateRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  // If function for date of upload
  if (uDateUp.value.match(dateRegex)) {
    uDateUp.style.border = '2px solid #00FF00';
  } else {
    uDateUp.style.border = '2px solid red';
    document.getElementById('dUp').innerHTML =
      'Please fill correct date of upload';
  }

  // If function for mode of payment.
  if (uModeP.value == 'selectMode') {
    uModeP.style.border = '2px solid red';
    document.getElementById('mode').innerHTML = 'Please select mode of payment';
    // return false;
  } else {
    uModeP.style.border = '2px solid #00FF00';
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
  
  // Initializing ugx regex.
  const ugxRegex = /^\d+([.,]\d{1,3})?$/;
  // If function for unit price/ kg.
  if (uPriceK.value.match(ugxRegex)) {
    uPriceK.style.border = '2px solid #00FF00';
  } else {
    uPriceK.style.border = '2px solid red';
    document.getElementById('fone').innerHTML =
      'Please fill correct price per kg';
    // return false;
  }

  // If function for ward.
  if (uWard.value == 'selectWard') {
    uWard.style.border = '2px solid red';
    document.getElementById('wad').innerHTML = 'Please select ward';
  } else {
    uWard.style.border = '2px solid #00FF00';
    // return false;
  }

  const alphaNumeric = /^[0-9a-zA-Z]+$/;
  // If function for address
  if (addRes.value.match(alphaNumeric)) {
    addRes.style.border = '2px solid #00FF00';
  } else {
    addRes.style.border = '2px solid red';
    document.getElementById('addr').innerHTML = 'Please fill correct address';
    // return false;
  }

  // If function for Produce type.
  if (uProd.value == 'selectType') {
    uProd.style.border = '2px solid red';
    document.getElementById('prod').innerHTML = 'Please select produce type';
  } else {
    uProd.style.border = '2px solid #00FF00';
  }

  // If function for quantity.
  if (famQuant.value.match(alphaNumeric)) {
    famQuant.style.border = '2px solid #00FF00';
  } else {
    famQuant.style.border = '2px solid red';
    document.getElementById('qt').innerHTML = 'Please fill correct quantity';
    // return false;
  }

  // Test for residence type
  var valid = false;
  var resi = document.oForm.modeOfDelivery;

  for (var i = 0; i < resi.length; i++) {
    if (resi[i].checked) {
      valid = true;
      break;
    }
  }
  if (valid) {
  } else {
    document.getElementById('rad').innerHTML = 'Please select activity';

    return false;
  }



};
