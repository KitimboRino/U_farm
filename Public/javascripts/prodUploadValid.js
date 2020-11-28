// Acessing the DOM by formname and element name
const foNo = document.uploadForm.id;
const pname = document.uploadForm.produceName;
const dateUpload = document.uploadForm.dateOfUpload;
const phon = document.uploadForm.phone;
const add = document.uploadForm.address;
const mode = document.uploadForm.modeOfDelivery;
const Ward = document.uploadForm.ward;
const uPrice = document.uploadForm.unitPrice;
const quant = document.uploadForm.quantity;
const prodType = document.uploadForm.produceType;
const mPay = document.uploadForm.mPayment;
const img = document.uploadForm.image;

//Error Display picked from Id of errors in form
const Uid_error = document.getElementById('Uid');
const pName_error = document.getElementById('prodname');
const dUpload_error = document.getElementById('dUp');
const phne_error = document.getElementById('phon');
const addr_error = document.getElementById('addr');
const modeD_error = document.getElementById('mde');
const wad_error = document.getElementById('wad');
const uPrice_error = document.getElementById('uPrice');
const quant_error = document.getElementById('qt');
const prodT_error = document.getElementById('prod');
const mPay_error = document.getElementById('mode');
const img_error = document.getElementById('im');

//Event Listners got from consts
foNo.addEventListener('blur', fiD_Verify, true);
pname.addEventListener('blur', pName_Verify, true);
dateUpload.addEventListener('blur', DoU_Verify, true);
phon.addEventListener('blur', phne_Verify, true);
add.addEventListener('blur', addre_Verify, true);
// mode.addEventListener('blur', modeD_Verify, true);
Ward.addEventListener('blur', ward_Verify, true);
uPrice.addEventListener('blur', uPrice_Verify, true);
quant.addEventListener('blur', quant_Verify, true);
prodType.addEventListener('blur', pType_Verify, true);
// mPay.addEventListener('blur', mPay_Verify, true);
img.addEventListener('blur', img_Verify, true);

function Validate() {
  // foNo validation
  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    Uid_error.textContent = 'Urban Farmer ID is required';
    foNo.focus();
    return false;
  } else {
    foNo.style.border = '1px solid green';
  }
  //Produce validation
  if (pname.value == '') {
    pname.style.border = '1px solid red';
    pName_error.textContent = 'Produce Name is required';
    pname.focus();
    return false;
  }

  // Date of Upload
  if (dateUpload.value == '') {
    dateUpload.style.border = '1px solid red';
    dUpload_error.textContent = 'Date of birth is required';
    dateUpload.focus();
    return false;
  }

  // Phone
  if (phon.value == '') {
    phon.style.border = '1px solid red';
    phne_error.textContent = 'Phone is required';
    phon.focus();
    return false;
  }

  //address validation
  if (add.value == '') {
    add.style.border = '1px solid red';
    addr_error.textContent = 'Username is required';
    add.focus();
    return false;
  }

  //Mode of deilivery validation
  if (
    mode[0].checked != true &&
    mode[1].checked != true 
  ) {
    modeD_error.textContent = 'Select atleast one mode of delivery';
    return false;
  } else {
    modeD_error.innerHTML = '';
    // return true;
  }

  // Urban Ward
  if (Ward.value == 'selectWard') {
    Ward.style.border = '1px solid red';
    wad_error.textContent = 'Select Ward';
    Ward.focus();
    return false;
  }

  // Price
  if (uPrice.value == '') {
    uPrice.style.border = '1px solid red';
    uPrice_error.textContent = 'Price is required';
    uPrice.focus();
    return false;
  }

  // Quantity
  if (quant.value == '') {
    quant.style.border = '1px solid red';
    quant_error.textContent = 'Quantity is required';
    quant.focus();
    return false;
  }

  // Produce type
  if (prodType.value == 'selectType') {
    prodType.style.border = '1px solid red';
    prodT_error.textContent = 'Select Produce Type';
    prodType.focus();
    return false;
  }

  //Mode of pay validation
  if (
    mPay[0].checked != true &&
    mPay[1].checked != true 
  ) {
    mPay_error.textContent = 'Select atleast one mode of pay';
    return false;
  } else {
    mPay_error.innerHTML = '';
    // return true;
  }

  // Image Uplaod
  if (img.value == '') {
    img.style.border = '1px solid red';
    img_error.textContent = 'image is required';
    img.focus();
    return false;
  }
}

// Regex
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const ufRegex = /UF-[1-9]{1,}\d?/; //for FO number

// Event Handlers for correct data
// Unique ID
function fiD_Verify() {
  if (foNo.value != '' && foNo.value.match(ufRegex)) {
    foNo.style.border = '1px solid #98FB98';
    Uid_error.innerHTML = '';
    return true;
  }else{
    foNo.style.border = 'red';
    Uid_error.textContent = 'UF number should have required format';
    return false;
  }
}

// Produce name
function pName_Verify() {
  if (pname.value != '' && pname.value.match(alphaNumeric)) {
    pname.style.border = '1px solid #98FB98';
    pName_error.innerHTML = '';
    return true;
  } else {
    pname.style.border = 'red';
    pName_error.textContent = 'Product name must be alpanumeric characters';
    return false;
  }
}

// Date of Upload
function DoU_Verify() {
  if (dateUpload.value != '') {
    dateUpload.style.border = '1px solid #98FB98';
    dUpload_error.innerHTML = '';
    return true;
  }
}

// Phone number
function phne_Verify() {
  if (phon.value != '' && phon.value.match(phoneRegex)) {
    phon.style.border = '1px solid #98FB98';
    phne_error.innerHTML = '';
    return true;
  } else {
    phon.style.border = 'red';
    phne_error.textContent = 'Phone number must be 10 digits';
    return false;
  }
}

// Address
function addre_Verify() {
  if (add.value != '') {
    add.style.border = '1px solid #98FB98';
    addr_error.innerHTML = '';
    return true;
  }
}

// Mode of delivery
function modeD_Verify() {
  if (mode.value != '') {
    mode.style.border = '1px solid #98FB98';
    modeD_error.innerHTML = '';
    return true;
  }
}

// Ward
function ward_Verify() {
  if (Ward.value != '') {
    Ward.style.border = '1px solid #98FB98';
    wad_error.innerHTML = '';
    return true;
  }
}

// Unit Price
function uPrice_Verify() {
  if (uPrice.value != '') {
    uPrice.style.border = '1px solid #98FB98';
    uPrice_error.innerHTML = '';
    return true;
  }
}

// Quantity
function quant_Verify() {
  if (quant.value != '') {
    quant.style.border = '1px solid #98FB98';
    quant_error.innerHTML = '';
    return true;
  }
}

// Produce Type
function pType_Verify() {
  if (prodType.value != '') {
    prodType.style.border = '1px solid #98FB98';
    prodT_error.innerHTML = '';
    return true;
  }
}

// Mode of payment
function mPay_Verify() {
  if (mPay.value != '') {
    mPay.style.border = '1px solid #98FB98';
    mPay_error.innerHTML = '';
    return true;
  }
}

// image
function img_Verify() {
  if (img.value != '') {
    img.style.border = '1px solid #98FB98';
    img_error.innerHTML = '';
    return true;
  }
}
