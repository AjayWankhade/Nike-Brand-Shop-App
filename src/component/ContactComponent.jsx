function ContactComponent() {
  // Static contact details
  const name = "Nike Store Customer Care";
  const phoneNumber = "1-800-NIKE-123";
  const email = "support@nike.com";
  const address = "123 Nike Ave, Swoosh City";

  return (
    <div className="contact-container">
      {" "}
      {/* Apply container class */}
      <h2>Contact Page</h2>
      <p>This is the contact page.</p>
      <p>Contact Details:</p>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ContactComponent;
