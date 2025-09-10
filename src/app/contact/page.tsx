import ContactCard from "../component/ContactCard";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div >
      <ContactCard />
      <ContactForm />
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9325633920043!2d72.80530590948901!3d21.23452258038526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ea7d71a94d3%3A0x25726284ea3f69d6!2sPlatinum%20Park%2C%20Dabholi%20Village%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1757395928145!5m2!1sen!2sin"
        width="1500"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
