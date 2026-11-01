// Faculty Registration Form Validation
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("teacherForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var dept = document.getElementById("dept").value;
    var experience = document.getElementById("experience").value.trim();
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var agree = document.getElementById("agree").checked;

    // Validate Names
    if (fname === "" || lname === "") {
      alert("Error: Please enter both First Name and Last Name.");
      document.getElementById("fname").focus();
      event.preventDefault();
      return false;
    }

    // Validate Email
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Error: Please enter a valid institutional email address.");
      document.getElementById("email").focus();
      event.preventDefault();
      return false;
    }

    // Validate Department
    if (dept === "") {
      alert("Error: Please select your Department.");
      document.getElementById("dept").focus();
      event.preventDefault();
      return false;
    }

    // Validate Experience (number)
    if (experience === "" || isNaN(experience) || Number(experience) < 0) {
      alert("Error: Please enter a valid number of years for experience.");
      document.getElementById("experience").focus();
      event.preventDefault();
      return false;
    }

    // Validate Password (min 8 characters)
    if (password.length < 8) {
      alert("Error: Password must be at least 8 characters long!");
      document.getElementById("password").focus();
      event.preventDefault();
      return false;
    }

    // Validate Confirm Password
    if (password !== confirm) {
      alert("Error: Passwords do not match!");
      document.getElementById("confirm").focus();
      event.preventDefault();
      return false;
    }

    // Validate Agreement
    if (!agree) {
      alert("Error: You must agree to the faculty terms and privacy policy.");
      document.getElementById("agree").focus();
      event.preventDefault();
      return false;
    }

    // Success Pop-up
    alert("Faculty Account Created Successfully!\nWelcome, Professor " + lname + "!");
  });
});
