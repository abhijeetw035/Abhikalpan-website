import AboutUs from "./(Custom Components)/aboutus";
import Contact from "./(Custom Components)/Contactus";
import Navbar from "./(Custom Components)/Navbar";
import Schedule from "./(Custom Components)/Schedule";

export default function Home() {
  return (
    <div className="p-2 m-1">
        <Navbar/>
        <Schedule/>
        <AboutUs/>
        <Contact/>
    </div>
  );
}
