import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container text-center">
        <h2 className="text-uppercase">Contact Me</h2>
        <form className="mt-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;