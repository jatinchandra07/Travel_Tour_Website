import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ServiceImg from "../Components/Images/night.jpg";
import Footer from "../Components/Footer/Footer";
import Trip from "../Components/Trip/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" />
      <Trip/>
      <Footer/>
    </>
  );
}
export default Service;
