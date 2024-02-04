import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Intro.css'; // Import CSS file
import { Link } from 'react-router-dom'; // Import Link
// import Homepage from '../HomePage/Homepage';

const LoaderComponent = ({ isVisible }) => {
    useEffect(() => {
        // Animation with GSAP
        const tl = gsap.timeline();

        tl.from(".clip-top, .clip-bottom", {
            duration: 2,
            delay: 1,
            height: "50vh",
            ease: "power4.inOut",
        })
        .to(".marquee", {
            duration: 3.5,
            delay: 0.75,
            top: "50%",
            ease: "power4.inOut",
        })
        .from(".clip-top.marquee, .clip-bottom.marquee", {
            duration: 5,
            delay: 1,
            top: "100%",
            ease: "power3.inOut",
        })
        .from(".clip-centre.marquee", {
            duration: 5,
            delay: 1,
            top: "-50%",
            ease: "power3.inOut",
        })
        .to(".clip-top, .clip-bottom", {
            duration: 2,
            delay: 6,
            clipPath: "inset(0 0 100% 0)",
            ease: "power4.inOut",
        })
        .to(".clip-top.marquee span, .clip-bottom.marquee span, .clip-centre.marquee span", {
            duration: 1,
            delay: 6,
            opacity: 0,
            ease: "power2.inOut",
        });

        // Cleanup
        return () => {
            tl.kill(); // Kill the animation instance
        };
    }, []);

    return isVisible ? (
        <div>
            <div className="loader">
                <div className="loader-clip clip-top">
                    <div className="marquee">
                        <div className="marquee-container">
                            <span>UTKANSH</span>
                            <span>UTKANSH</span>
                            UTKANSH
                            <span>UTKANSH</span>
                            <span>UTKANSH</span>
                        </div>
                    </div>
                </div>
                <div className="loader-clip clip-bottom">
                    <div className="marquee">
                        <div className="marquee-container">
                            <span>UTKANSH</span>
                            <span>UTKANSH</span>
                            UTKANSH
                            <span>UTKANSH</span>
                            <span>UTKANSH</span>
                        </div>
                    </div>
                </div>
                <div className="clip-centre">
                    <div className="marquee">
                        <div className="marquee-container">
                            UTKANSH
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <Link to="/more">Go to Homepage</Link>
            </div> */}
        </div>
    ) : null;
};

export default LoaderComponent;
