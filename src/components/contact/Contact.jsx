import "./contact.scss";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Read my resume:</h2>
        <a href="assets/resume.pdf">
          <AssignmentIcon className="icon" />
          <span>Updated for opportunities in Fall 2022!</span>
        </a>
        <br />
        <h2>or reach out to me!</h2>
        <a href="https://www.linkedin.com/in/harrychen0/" target="_blank" rel="noreferrer">
          <LinkedInIcon className="icon" />
          <span>Connect with me or send me a message!</span>
        </a>
        <a href="mailto:harry.chen@uwaterloo.ca">
          <EmailIcon className="icon" />
          <span>Send me an email about anything!</span>
        </a>
      </div>
    </div>
  );
}