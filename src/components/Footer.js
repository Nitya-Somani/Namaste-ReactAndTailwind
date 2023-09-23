import { useRouteError } from "react-router-dom";

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex items-center justify-center">
    <span className="text-xl mr-2">Created with</span>
    <i className="text-red-500 fa-solid fa-heart text-2xl"></i>
    <span className="ml-2 mr-4 text-xl">by Nitya Somani</span>
    <div className="icon-box">
      <a
        href="https://www.linkedin.com/in/nitya-somani/"
        target="_blank"
        rel="noopener noreferrer"
        title="Nitya Somani LinkedIn Profile"
        aria-label="Nitya Somani LinkedIn Profile"
        className="text-gray-400 hover:text-gray-200"
      >
        <i className="fab fa-linkedin-in text-2xl"></i>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
