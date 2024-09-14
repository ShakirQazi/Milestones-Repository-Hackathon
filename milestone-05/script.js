//Getting references from form(FROM HTML) and then displaying here.
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("display-resume");
var shareableLinkContainer = document.getElementById('shareable-link');
var shareableLinkElement = document.getElementById('shareable-link-text');
var downloadPdfButton = document.getElementById('download-btn');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //It will prevent page to reload
    //Get the data from form by user
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the datalocally
    //Dynamically Generating the Resume
    var resumeHTML = "\n<h2><i><b><u>Editable + Shareable Resume:</u> </b></i></h2>\n    <h3>Personal Information</h3>\n    <p><b><span contenteditable=\"true\">Name:</b> ".concat(name, "</span></p>\n    <p><b><span contenteditable=\"true\">Email:</b> ").concat(email, "</span></p>\n    <p><b><span contenteditable=\"true\">Phone:</b> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p><span contenteditable=\"true\"><b>Education:</b> ").concat(education, "</span></p>\n\n    <h3>Work Experience</h3>\n    <p><spancontenteditable=\"true\"><b>Experience:</b> ").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p><span contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</span></p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume Display element not found");
    }
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
