import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ContactImg from "../Components/Images/2.jpg";
import Footer from "../Components/Footer/Footer";
import ContactData from "../Components/ContactData/ContactData";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" />
      <ContactData/>
      <Footer/>
    </>
  );
}
export default Contact;
