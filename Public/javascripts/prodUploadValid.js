// Acessing the DOM by formname and element name
const foNo = document.uploadForm.id;
const pname = document.uploadForm.produceName;
const dateUpload = document.uploadForm.dateOfUpload;
const phon = document.uploadForm.phone;
const add = document.uploadForm.address;
const modeD = document.uploadForm.modeOfDeliver;
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
modeD.addEventListener('blur', modP_Verify, true);
Ward.addEventListener('blur', ward_Verify, true);
uPrice.addEventListener('blur', uPrice_Verify, true);
quant.addEventListener('blur', quant_Verify, true);
prodType.addEventListener('blur', pType_Verify, true);
mPay.addEventListener('blur', mPay_Verify, true);
img.addEventListener('blur', img_Verify, true);

function Validate() {
  // foNo validation
  if (foNo.value == '') {
    foNo.style.border = '1px solid red';
    Uid_error.textContent = 'Urban Farmer ID is required';
    foNo.focus();
    return false;
  }else{
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

  //Mode of delivery validation (check this out)
  //   if (modeD.value == '') {
  //     modeD.style.border = '1px solid red';
  //     modeD_error.textContent = 'Password is required';
  //     modeD.focus();
  //     return false;
  //   }

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

  // Mode of pay
  if (mPay.value == 'selectMode') {
    mPay.style.border = '1px solid red';
    mPay_error.textContent = 'Select mode of Payment';
    mPay.focus();
    return false;
  }

  // Image Uplaod
  if (img.value == '') {
    img.style.border = '1px solid red';
    img_error.textContent = 'Date is required';
    img.focus();
    return false;
  }
}
