function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
   
  
  
  document.getElementById("myInput").addEventListener("input", function phonie(){

    // Getting the text field of our input value
    let word = document.querySelector(".word").value;
    // Getting the classlist for all our network logo(image)
    let mtn = document.querySelector(".mtn").classList;
    let airtel = document.querySelector(".airtel").classList;
    let glo = document.querySelector(".glo").classList;
    let etisalat = document.querySelector(".etisalat").classList;
    let myText = document.querySelector(".myText").classList;
    let myspan = document.querySelector(".myspan");
    let myselect = document.getElementById("myselect")
    // Using nested ifs statement to test for the occurence of the first group of numbers
if(myselect.value == "select amount to recharge"){
 document.getElementById("entertext").innerText="Please Select a Valid Amount To Recharge"; setTimeout(()=>document.getElementById("entertext").innerText="", 5000)
  mtn.remove("expose");
  airtel.remove("expose");
  glo.remove("expose");
  etisalat.remove("expose");
  myText.remove("expose");
  document.querySelector(".thanks").innerText=""
  return;
}
    
    if(word.startsWith("07025")||word.startsWith("07026")
    ||word.startsWith("0703")||word.startsWith("0704")||
    word.startsWith("0706")||word.startsWith("0803")||
    word.startsWith("0806")||word.startsWith("0810")||
    word.startsWith("0813")||word.startsWith("0814")||
    word.startsWith("0816")||word.startsWith("0903")||
    word.startsWith("0906")){
        // When the occurence matches any of the numbers listed for Mtn line, display the network Logo.
        mtn.add("expose");
        myText.add("expose");
        myspan.innerText="an Mtn line"
        //Remove the visiblity from other network logo
        airtel.remove("expose");
        glo.remove("expose")
        etisalat.remove("expose");
 
    }

    // Using nested ifs statement to test for the occurence of the first group of numbers
     if(word.startsWith("0802")||word.startsWith("0701")||
     word.startsWith("0808")||word.startsWith("0708")||
     word.startsWith("0812")||word.startsWith("0902")){
        // When the occurence matches any of the numbers listed for Airtel line, display the network Logo.
        airtel.add("expose");
        myText.add("expose");
        myspan.innerText="an Airtel line"
       //Remove the visiblity from other network logo
        mtn.remove("expose");
        glo.remove("expose");
        etisalat.remove("expose");
    }

     // Using nested ifs statement to test for the occurence of the first group of numbers
    if(word.startsWith("0805")||word.startsWith("0807")||
    word.startsWith("0811")||word.startsWith("0705")||
    word.startsWith("0815")||word.startsWith("0905")){
        // When the occurence matches any of the numbers listed for Glo Line, display the network Logo.
        glo.add("expose");
        myText.add("expose");
        myspan.innerText="a Glo line"
        //Remove the visiblity from other network logo
        mtn.remove("expose");
        airtel.remove("expose");
        etisalat.remove("expose");
    }

     // Using nested ifs statement to test for the occurence of the first group of numbers
    if(word.startsWith("0809")||word.startsWith("0817")||
    word.startsWith("0818")||word.startsWith("0908")||
    word.startsWith("0909")){
         // When the occurence matches any of the numbers listed Etisalat line, display the network Logo.
        etisalat.add("expose");
        myText.add("expose");
        myspan.innerText="an Etisalat line"
         //Remove the visiblity from other network logo
        mtn.remove("expose");
        glo.remove("expose");
        airtel.remove("expose");
    } 
    if(word.startsWith("+234")){
      document.querySelector(".word").value=0;
    }
    
}
)
  

document.getElementById("text").addEventListener("click", ()=>{
  document.querySelector(".thanks").innerText="Thank you for using circle-1 Phonie project";
})

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element a]nd an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
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
            b.innerHTML = arr[i].substring(0, val.length) ;
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
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the network numbers:*/
  var network_Numbers = ["07025","07026","0703","0704","0706","0803", "0810","0806","0813","0814","0816","0903","0906","0802","0701","0808","0708","0812","0902","0805","0807","0811","0705","0815","0905","0809","0817","0818","0908","0909"];

  /*initiate the autocomplete function on the "myInput" element, and pass along the network_Numbers array as possible autocomplete values:*/
  
  autocomplete(document.getElementById("myInput"), network_Numbers);
  
   
  };
  


  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //