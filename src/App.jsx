import Hero from "./components/Hero";
import RacingLaunch from "./components/RacingLaunch";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import CTAFooter from "./components/CTAFooter";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">
      <Hero />
      <RacingLaunch />
      <Amenities />
      <Gallery />
      <CTAFooter />
    </div>
  );
}

export default App;
