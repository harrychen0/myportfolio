import "./navbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            harry.
          </a>
          <a href="https://www.linkedin.com/in/harrychen0/" className="link" target="_blank" rel="noreferrer">
            <LinkedInIcon className="icon" />
            <span>/harrychen0</span>
          </a>
          <a href="mailto:harry.chen@uwaterloo.ca" className="link">
            <EmailIcon className="icon" />
            <span>harry.chen@uwaterloo.ca</span>
          </a>
          <a href="https://github.com/harrychen0" className="link" target="_blank" rel="noreferrer">
            <GitHubIcon className="icon" />
            <span>/harrychen0</span>
          </a>
          <a href="assets/resume.pdf" className="link">
            <AssignmentIcon className="icon" />
            <span>Resume</span>
          </a>
        </div>
        <div className="right">
          <div className="menubutton" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
