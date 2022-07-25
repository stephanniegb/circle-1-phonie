const UIForm = document.querySelector("#form_1");
const UItelNumInput = document.getElementById("tel-input");
const UItelcomImage = document.getElementById("telcom-image");

//add event listener to input
UItelNumInput.addEventListener("input", () => {
  const inputValue = UItelNumInput.value.trim()
  validatePhoneNumber()
  if((inputValue.startsWith('+234') && inputValue.length >= 7) || (inputValue.startsWith('0') && inputValue.length >= 4)) {
    checkServiceProvider()
  }
});


// if input is empty show error message and hide telcom image
// else hide error message
function validatePhoneNumber() {
  const telNum = UItelNumInput.value.trim();
  const telNumLength = telNum.length
  if (telNumLength === 0) {
    UItelcomImage.style.visibility = 'hidden'
    document.querySelector(".error_msg").innerHTML = "This field cannot be empty";
  }else if(telNumLength < 4){
    UItelcomImage.style.visibility = 'hidden'
    document.querySelector(".error_msg").innerHTML = " ";
  }else if((telNum.startsWith('0') && telNumLength > 11) || (telNum.startsWith('+234') && telNumLength > 14)) {
    document.querySelector(".error_msg").innerHTML = "Invalid phone number";
  }else {
    document.querySelector(".error_msg").innerHTML = " ";
  }
}

// Validate service provider
function checkServiceProvider() {
  // Regular Expressions
  const mtnRegex =
    /^([\+]234|0)7025|([\+]234|0)7026|([\+]234|0)703|([\+]234|0)704|([\+]234|0)706|([\+]234|0)803|([\+]234|0)806|([\+]234|0)810|([\+]234|0)813|([\+]234|0)814|([\+]234|0)816|([\+]234|0)906|([\+]234|0)903|([\+]234|0)913|([\+]234|0)916/gi;
  const gloRegex =
    /^([\+]234|0)805|([\+]234|0)807|([\+]234|0)811|([\+]234|0)705|([\+]234|0)815|([\+]234|0)905|([\+]234|0)915/gi;
  const airtelRegex =
    /^([\+]234|0)802|([\+]234|0)808|([\+]234|0)812|([\+]234|0)701|([\+]234|0)708|([\+]234|0)902|([\+]234|0)907|([\+]234|0)901|([\+]234|0)904|([\+]234|0)912/gi;
  const nineMobileRegex =
    /^([\+]234|0)809|([\+]234|0)817|([\+]234|0)818|([\+]234|0)908|([\+]234|0)909/gi;
  //end of block

  const telNum = UItelNumInput.value.toString().trim();
  let imageSrc = null

  // Mtn validation
  if (mtnRegex.test(telNum)) {
    imageSrc = "./assets/images/mtn.svg"
  }

  //Glo validation
  if (gloRegex.test(telNum)) {
    imageSrc = "./assets/images/glo.png"
  }

  //Airtel validation
  if (airtelRegex.test(telNum)) {
    imageSrc = "./assets/images/airtel.svg"
  }

  //9Mobile validation
  if (nineMobileRegex.test(telNum)) {
    imageSrc = "./assets/images/9mobile.svg"
  }

  if(imageSrc !== null) {
    UItelcomImage.style.visibility = 'visible'
    UItelcomImage.setAttribute('src', imageSrc)
  }else {
    document.querySelector(".error_msg").innerHTML = "Invalid phone code";
    UItelcomImage.style.visibility = 'hidden'
  }
}
