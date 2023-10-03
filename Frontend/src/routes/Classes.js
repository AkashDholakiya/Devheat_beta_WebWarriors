import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Classes(){
  return(
    <>
    <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg="https://img.freepik.com/free-photo/portrait-muscled-woman-training-with-barbell-isolated-purple-background-neon-light_155003-45819.jpg?w=996&t=st=1696183172~exp=1696183772~hmac=ef62e1531c17ac7890dbc1c1ad9e0ab638a7a297940fd11db1c4940f392daa67"
    text="Classes"
    btnClass="hide"
    />
    <Footer/>
    </>
  )
}
export default Classes;