// Admin Registration Form Validation
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("adminForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var adminid = document.getElementById("adminid").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var role = document.getElementById("role").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    // Validate Name
    if (name === "" || name.length < 3) {
      alert("Error: Please enter administrator full name (minimum 3 characters).");
      document.getElementById("name").focus();
      event.preventDefault();
      return false;
    }

    // Validate Email
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Error: Please enter a valid admin email address.");
      document.getElementById("email").focus();
      event.preventDefault();
      return false;
    }

    // Validate Admin ID
    if (adminid === "") {
      alert("Error: Please enter the Admin ID.");
      document.getElementById("adminid").focus();
      event.preventDefault();
      return false;
    }

    // Validate Phone Number
    if (phone === "" || isNaN(phone) || phone.length < 11) {
      alert("Error: Please enter a valid 11-digit phone number.");
      document.getElementById("phone").focus();
      event.preventDefault();
      return false;
    }

    // Validate Role
    if (role === "") {
      alert("Error: Please select an administrative role.");
      document.getElementById("role").focus();
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

    // Success Pop-up
    alert("Admin Registered Successfully!\nAccount created for " + name + " (" + role + ").");
  });
});
