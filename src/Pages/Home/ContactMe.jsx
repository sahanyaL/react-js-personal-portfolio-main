export default function ContactMe() {

  function sendEmail() {
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const message = document.getElementById("message").value;

    const emailLink = "mailto:lpiyumdi@gmail.com" +
        "?subject=" + encodeURIComponent("Quick Message") +
        "&body=" + encodeURIComponent("First Name: " + firstName + "\nEmail: " + email + "\nPhone Number: " + phoneNumber + "\n\nMessage: " + message);
    window.location.href = emailLink;
}

  return (
    

    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        
        <div>
          <button className="btn btn-primary contact--form--btn" onClick={sendEmail}>Submit</button>
        </div>
      </form>
    </section>
    

  );
} 
