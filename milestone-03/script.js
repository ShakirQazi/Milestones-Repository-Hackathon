//Getting references from form(FROM HTML) and then displaying here.
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("display-resume");
form.addEventListener('submit', function (event) {
    event.preventDefault(); //It will prevent page to reload
    //Get the data from form by user
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Dynamically Generating the Resume
    var resumeHTML = "\n<h2><i><b><u>Generated Resume:</u> </b></i></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p><b>Education:</b> ").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p><b>Experience:</b> ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume Display element not found");
    }
});
