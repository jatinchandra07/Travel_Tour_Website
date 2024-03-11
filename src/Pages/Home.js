import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import HomeImg from "../Components/Images/12.jpg";
import Destination from "../Components/Destination/Destination";
import Trip from "../Components/Trip/Trip";
import Footer from "../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
