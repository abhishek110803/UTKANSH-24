import React, { useEffect, useState } from 'react';
import './Homepage.css';
import AboutUsSection from '../About/About';
import ContactSection from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import FallingText from '../Backgroundtext/FallingText';
import LoaderComponent from '../Intro/Intro';

const Homepage = () => {
    const [isVisible, setVisible] = useState(true);
//     useEffect(() => {
// fun(false)
//     }, [])
    return (
        // isVisible ? (
        //     <div onClick={() => setVisible(false)}>
        //         <LoaderComponent isVisible={isVisible} />
        //     </div>
        // ) : (
        <>
            <FallingText />
            <AboutUsSection />
            <Gallery />
            <ContactSection />
        </>
        // )
    );
};

export default Homepage;
