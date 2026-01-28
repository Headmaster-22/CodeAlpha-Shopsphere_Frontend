const AboutPage = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="py-5 text-center" style={{ backgroundColor: "#6050DC", color: "white", borderRadius: "8px" }}>
        <h1 className="display-4 fw-bold">About Shopsphere</h1>
        <p className="lead text-white-75">A demo e-commerce project built by Jimoh Abdulquyum</p>
      </header>

      {/* Project Info */}
      <section className="mt-5">
        <h2>About This Project</h2>
        <p>
          Shopsphere is a demonstration e-commerce frontend built with React.js, designed to showcase product listings, cart functionality, user authentication, and checkout workflows.
        </p>

        <h2>Important Notice</h2>
        <p>
          All payment methods integrated on this platform (PayPal, Flutterwave, etc.) are for testing purposes only. No real transactions are processed.
        </p>

        <h2>Project Author</h2>
        <p>
          This project was created by <strong>Jimoh Abdulquyum</strong> as part of learning and building practical React projects.
        </p>

        <h2>Contact & Links</h2>
        <ul>
          <li>Email: <a href="mailto:jimohabdulquyum@gmail.com">jimohabdulquyum@gmail.com</a></li>
          <li>LinkedIn: <a href="Http://linkedin.com/in/abdulquyum-jimoh-71117139b" target="_blank" rel="noreferrer">linkedin.com/in/jimoh-abdulquyum</a></li>
          <li>GitHub: <a href="https://github.com/Headmaster-22" target="_blank" rel="noreferrer">github.com/Headmaster-22</a></li>
        </ul>
      </section>
    </div>
  )
}

export default AboutPage
