// Alumni Registration Form Validation
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("alumniForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var phone = document.getElementById("phone").value.trim();
    var studentId = document.getElementById("student_id").value.trim();
    var department = document.getElementById("department").value;
    var degree = document.getElementById("degree").value;
    var passingYear = document.getElementById("passing_year").value;
    var confirmCheckbox = document.getElementById("confirm").checked;

    // Validate Name
    if (fullname === "" || fullname.length < 3) {
      alert("Error: Please enter your full name (minimum 3 characters).");
      document.getElementById("fullname").focus();
      event.preventDefault();
      return false;
    }

    // Validate Email
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Error: Please enter a valid email address.");
      document.getElementById("email").focus();
      event.preventDefault();
      return false;
    }

    // Validate Password (minimum 8 characters)
    if (password.length < 8) {
      alert("Error: Password must be at least 8 characters long!");
      document.getElementById("password").focus();
      event.preventDefault();
      return false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
      document.getElementById("confirm_password").focus();
      event.preventDefault();
      return false;
    }

    // Validate Phone Number
    if (phone === "" || isNaN(phone) || phone.length < 11) {
      alert("Error: Please enter a valid 11-digit mobile number.");
      document.getElementById("phone").focus();
      event.preventDefault();
      return false;
    }

    // Validate Former Student ID
    if (studentId === "") {
      alert("Error: Please enter your former AIUB student ID.");
      document.getElementById("student_id").focus();
      event.preventDefault();
      return false;
    }

    // Validate Department & Degree
    if (department === "" || degree === "" || passingYear === "") {
      alert("Error: Please complete your academic details (Department, Degree, Graduation Year).");
      event.preventDefault();
      return false;
    }

    // Validate Confirmation
    if (!confirmCheckbox) {
      alert("Error: Please confirm that your information is accurate.");
      document.getElementById("confirm").focus();
      event.preventDefault();
      return false;
    }

    // Success Pop-up
    alert("Alumni Registration Successful!\nThank you for joining CampusBazar, " + fullname + "!");
  });
});
