import "./contact.scss";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          <span>Seeking internship opportunities in Canada and US</span>
        </a>
        <br />
        <h2>Get in touch with me:</h2>
        <a href="https://www.linkedin.com/in/harrychen0/" target="_blank" rel="noreferrer">
          <LinkedInIcon className="icon" />
          <span>Connect with me or send me a message</span>
        </a>
        <a href="mailto:harrychen0829@gmail.com">
          <EmailIcon className="icon" />
          <span>Send me an email about anything</span>
        </a>
        <a href="https://github.com/harrychen0" className="link" target="_blank" rel="noreferrer">
          <GitHubIcon className="icon" />
          <span>Check out all my projects</span>
        </a>
      </div>
    </div>
  );
}