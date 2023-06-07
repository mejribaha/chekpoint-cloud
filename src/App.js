import React from "react";

import IntroSection from "./Components/intro/Intro";
import ContactSection from "./Components/contact-section/ContactSection";
import DisclaimerSection from "./Components/disclaimer/Disclaimer";
import FooterSection from "./Components/footer/Footer";

import "./App.css";
import Map from "./Components/Map/Map";

function App() {
  const location = {
    //GOMYCODE_Hackerspace Béja

    Address: "Immeuble Bedouihech, 2ème étage, rue Rahmani Mnakbi",
    Latitude: 9.188522786921679,
    Longtude: 36.724479096550986,
  };

  return (
    <div className="App">
      <IntroSection />
      <div>
        <Map location={location} zoomLevel={16} />
      </div>
      <ContactSection />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
