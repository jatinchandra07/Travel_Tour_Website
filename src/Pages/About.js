import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import AboutImg from "../Components/Images/night.jpg";
import Footer from "../Components/Footer/Footer";
import AboutData from "../Components/AboutData/Aboutdata";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" 
      btnClass="hide"/>
      <AboutData/>
      <Footer/>
    </>
  );
}
export default About;
