import { useRouteError } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      Created By &nbsp;&nbsp;
      <i className="fa-solid fa-heart"></i>
      &nbsp;&nbsp;Nitya Somani&nbsp;&nbsp;

      <div className="icon-box">
        <div className="box">
          <a
            href="https://www.linkedin.com/in/nitya-somani/"
            target="_blank"
            rel="noopener noreferrer" // Added for security
            title="Nitya Somani LinkedIn Profile"
            aria-label="Nitya Somani LinkedIn Profile" // Added for accessibility
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
