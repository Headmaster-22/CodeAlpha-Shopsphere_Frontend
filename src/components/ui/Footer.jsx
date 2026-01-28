import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="py-3" style={{ backgroundColor: '#6050DC', color: 'white' }}>
      <div className="container text-center">
        <div className="mb-2">
          <a href="#" className="text-white text-decoration-none mx-2">Home</a>
          <a href="/about" className="text-white text-decoration-none mx-2">About</a>
          <a href="#" className="text-white text-decoration-none mx-2">Shop</a>
          <a href="/about" className="text-white text-decoration-none mx-2">Contact</a>
        </div>
        <div className="mb-2">
          <a href="Http://linkedin.com/in/abdulquyum-jimoh-71117139b" className="text-white mx-2"><FaLinkedin /></a>
          <a href="https://github.com/Headmaster-22" className="text-white mx-2"><FaGithub /></a>
          <a href="#" className="text-white mx-2"><FaInstagram /></a>
        </div>
        <p className="small mb-0">&copy; 2026 Shopsphere Headmaster®</p>
      </div>
    </footer>
  )
}

export default Footer
