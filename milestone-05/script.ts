//Getting references from form(FROM HTML) and then displaying here.

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("display-resume") as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link-text') as
HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-btn') as
HTMLButtonElement;

form.addEventListener('submit', (event:Event) => {  
    event.preventDefault(); //It will prevent page to reload

    //Get the data from form by user
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the datalocally

    //Dynamically Generating the Resume
    const resumeHTML= `
<h2><i><b><u>Editable + Shareable Resume:</u> </b></i></h2>
    <h3>Personal Information</h3>
    <p><b><span contenteditable="true">Name:</b> ${name}</span></p>
    <p><b><span contenteditable="true">Email:</b> ${email}</span></p>
    <p><b><span contenteditable="true">Phone:</b> ${phone}</span></p>

    <h3>Education</h3>
    <p><span contenteditable="true"><b>Education:</b> ${education}</span></p>

    <h3>Work Experience</h3>
    <p><spancontenteditable="true"><b>Experience:</b> ${experience}</span></p>

    <h3>Skills</h3>
    <p><span contenteditable="true"><b>Skills:</b> ${skills}</span></p>
    `;

    if(resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error("Resume Display element not found");
    }
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
    }
    }
    });

