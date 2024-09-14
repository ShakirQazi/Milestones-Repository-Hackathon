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
    var resumeHTML = "\n<h2><i><b><u>Editable Resume:</u> </b></i></h2>\n    <h3>Personal Information</h3>\n    <p><b><span contenteditable=\"true\">Name:</b> ".concat(name, "</span></p>\n    <p><b><span contenteditable=\"true\">Email:</b> ").concat(email, "</span></p>\n    <p><b><span contenteditable=\"true\">Phone:</b> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p><span contenteditable=\"true\"><b>Education:</b> ").concat(education, "</span></p>\n\n    <h3>Work Experience</h3>\n    <p><spancontenteditable=\"true\"><b>Experience:</b> ").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p><span contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</span></p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume Display element not found");
    }
});
