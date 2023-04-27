  function validateForm() {
    var title = document.forms["myForm"]["title"].value;
    var fullName = document.forms["myForm"]["full-name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    
    if (title == "") {
      alert("Title must be filled out");
      return false;
    }
    
    if (fullName == "") {
      alert("Full Name must be filled out");
      return false;
    }
    
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }
    
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  }

