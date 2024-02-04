import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoaderComponent from "./Intro/Intro";

import TeamMembers from './members/member';
import Events from './clubevent/Section';
import AccomodationPage from './Accomodation/Accomodation';
import Merchandise from './Merchandise/Tshirt';
import MerchandiseForm from './Merchandise/Checkout';
import Tshirtdetails from './Merchandise/Tshirtdetails';
import Homepage from './HomePage/Homepage';
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";

const Appi = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    isVisible ? (
      <div onclick={()=>{setVisible(false)}}><LoaderComponent isVisible={isVisible} /></div>
    ) : (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clubsandevent" element={<Events />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/merchandise/tshirtdetails/:id" element={<Tshirtdetails />} />
          <Route path="/merchandise/tshirtdetails/checkout" element={<MerchandiseForm />} />
          <Route path="/accomodationPage" element={<AccomodationPage />} />
          <Route path="/TeamMembers" element={<TeamMembers />} />
        </Routes>
        <Footer />
      </>
    )
  );
};

export default Appi;
