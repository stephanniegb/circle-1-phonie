function startApp() {
  //add event listener to input
  const form_btn = document.querySelector(".form_btn");
  //const UIForm = document.querySelector("#form_1");
  const UITelNumInput = document.getElementById("tel-input");
  const UITelcomImage = document.getElementById("telcom-image");
  UITelNumInput.addEventListener("input", () => {
    const inputValue = UITelNumInput.value.trim();
    validatePhoneNumber();
    if (
      (inputValue.startsWith("+234") && inputValue.length >= 7) ||
      (inputValue.startsWith("0") && inputValue.length >= 4)
    ) {
      checkServiceProvider();
    }
    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      let currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same number as the text field value:*/
          if (arr[i].substr(0, val.length) == val) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            b.innerHTML = arr[i].substring(0, val.length);
            b.innerHTML += arr[i].substring(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function(e) {
        closeAllLists(e.target);
      });
    }
    /*An array containing all the network numbers:*/
    var network_Numbers = ["07025", "07026", "0703", "0704", "0706", "0803", "0810", "0806", "0813", "0814", "0816", "0903", "0906", "0802", "0701", "0808", "0708", "0812", "0902", "0805", "0807", "0811", "0705", "0815", "0905", "0809", "0817", "0818", "0908", "0909"];

    /*initiate the autocomplete function on the "myInput" element, and pass along the network_Numbers array as possible autocomplete values:*/
    autocomplete(document.querySelector(".word"), network_Numbers);
  });
  // if input is empty show error message and hide telcom image
  // else hide error message
  function validatePhoneNumber() {
    const telNum = UITelNumInput.value.trim();
    const telNumLength = telNum.length;
    if (telNumLength === 0) {
      UITelcomImage.style.visibility = "hidden";
      document.querySelector(".error_msg").innerHTML =
        "This field cannot be empty";
    } else if (telNumLength < 4) {
      UITelcomImage.style.visibility = "hidden";
      document.querySelector(".error_msg").innerHTML = " ";
    } else if (
      (telNum.startsWith("0") && telNumLength > 11) ||
      (telNum.startsWith("+234") && telNumLength > 14)
    ) {
      document.querySelector(".error_msg").innerHTML = "Invalid phone number";
    } else {
      document.querySelector(".error_msg").innerHTML = " ";
    }
  }

  form_btn.addEventListener("click", () => {
    const amount = document.getElementById("amount");
    const walletBalance = document.querySelector(".myspan");
    const calculate = (walletBalance.innerHTML - amount.value);

    walletBalance.innerHTML = calculate;
  })

  
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

    const telNum = UITelNumInput.value.toString().trim();
    let imageSrc = null;

    // Mtn validation
    if (mtnRegex.test(telNum)) {
      imageSrc = "mtn.svg";
    }

    //Glo validation
    if (gloRegex.test(telNum)) {
      imageSrc = "glo.png";
    }

    //Airtel validation
    if (airtelRegex.test(telNum)) {
      imageSrc = "airtel.svg";
    }

    //9Mobile validation
    if (nineMobileRegex.test(telNum)) {
      imageSrc = "9mobile.svg";
    }

    if (imageSrc !== null) {
      UITelcomImage.style.visibility = "visible";
      UITelcomImage.setAttribute("src", imageSrc);
    } else {
      document.querySelector(".error_msg").innerHTML = "Invalid phone code";
      UITelcomImage.style.visibility = "hidden";
    }
  }
}


// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
