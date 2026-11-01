// Student Registration Form Validation
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("studentForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    // 1. Get input values
    var name = document.getElementById("student_name").value.trim();
    var email = document.getElementById("student_email").value.trim();
    var password = document.getElementById("student_password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var studentId = document.getElementById("aiub_id").value.trim();
    var department = document.getElementById("department").value;
    var semester = document.getElementById("current_semester").value;
    var phone = document.getElementById("phone").value.trim();
    var terms = document.getElementById("terms").checked;

    // 2. Validate Name (cannot be empty, minimum 3 letters)
    if (name === "") {
      alert("Error: Please enter your full name.");
      document.getElementById("student_name").focus();
      event.preventDefault();
      return false;
    }

    if (name.length < 3) {
      alert("Error: Full name must be at least 3 characters long.");
      document.getElementById("student_name").focus();
      event.preventDefault();
      return false;
    }

    // 3. Validate Email
    if (email === "") {
      alert("Error: Please enter your student email.");
      document.getElementById("student_email").focus();
      event.preventDefault();
      return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Error: Please enter a valid email address with '@' and '.'.");
      document.getElementById("student_email").focus();
      event.preventDefault();
      return false;
    }

    // 4. Validate Student ID
    if (studentId === "") {
      alert("Error: Please enter your AIUB Student ID.");
      document.getElementById("aiub_id").focus();
      event.preventDefault();
      return false;
    }

    // 5. Validate Password (minimum 8 characters)
    if (password.length < 8) {
      alert("Error: Password must be at least 8 characters long!");
      document.getElementById("student_password").focus();
      event.preventDefault();
      return false;
    }

    // 6. Validate Password Confirmation (must match)
    if (password !== confirmPassword) {
      alert("Error: Passwords do not match! Please check and re-enter.");
      document.getElementById("confirm_password").focus();
      event.preventDefault();
      return false;
    }

    // 7. Validate Department
    if (department === "") {
      alert("Error: Please select your academic Department.");
      document.getElementById("department").focus();
      event.preventDefault();
      return false;
    }

    // 8. Validate Semester
    if (semester === "") {
      alert("Error: Please select your Current Semester.");
      document.getElementById("current_semester").focus();
      event.preventDefault();
      return false;
    }

    // 9. Validate Phone Number (must be numeric and at least 11 digits)
    if (phone === "" || isNaN(phone) || phone.length < 11) {
      alert("Error: Please enter a valid 11-digit phone number (e.g. 017xxxxxxxx).");
      document.getElementById("phone").focus();
      event.preventDefault();
      return false;
    }

    // 10. Validate Terms Checkbox
    if (!terms) {
      alert("Error: You must agree to the Campus Code of Conduct.");
      document.getElementById("terms").focus();
      event.preventDefault();
      return false;
    }

    // Success Pop-up!
    alert("Registration Successful!\nWelcome to CampusBazar, " + name + "!");
  });
});
