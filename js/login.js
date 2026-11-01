// Login Form Validation
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    var loginId = document.getElementById("login_id").value.trim();
    var password = document.getElementById("login_password").value;

    // Validate Email or ID
    if (loginId === "") {
      alert("Error: Please enter your Email or User ID.");
      document.getElementById("login_id").focus();
      event.preventDefault();
      return false;
    }

    // Validate Password (minimum 8 characters)
    if (password.length < 8) {
      alert("Error: Password must be at least 8 characters long!");
      document.getElementById("login_password").focus();
      event.preventDefault();
      return false;
    }

    // Success Pop-up
    alert("Login Successful!\nWelcome back to CampusBazar.");
  });
});
