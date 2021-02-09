function submitAccouts() {
   
   /*user */
   
   var emailMobile = document.getElementById("User").value;
   var password = document.getElementById("Password").value;
   
   
   if(emailMobile == "" && password == ""){
      alert("Please Insert Your Password or Email");
      document.getElementById("User").style.borderColor = "red";
      document.getElementById("Password").style.borderColor = "red";
      return false;
   } else {
      return true;
   }
}