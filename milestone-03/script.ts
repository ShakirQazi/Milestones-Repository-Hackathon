//Getting references from form(FROM HTML) and then displaying here.

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("display-resume") as HTMLDivElement;

form.addEventListener('submit', (event:Event) => {  
    event.preventDefault(); //It will prevent page to reload

    //Get the data from form by user
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;


    //Dynamically Generating the Resume
    const resumeHTML= `
<h2><i><b><u>Generated Resume:</u> </b></i></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p><b>Education:</b> ${education}</p>

    <h3>Work Experience</h3>
    <p><b>Experience:</b> ${experience}</p>

    <h3>Skills</h3>
    <p><b>Skills:</b> ${skills}</p>
    `;

    if(resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error("Resume Display element not found");
    }
});