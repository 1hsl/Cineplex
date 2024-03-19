import React from "react";
import Hero from "./Hero";

const About = () => {
    return (
        <>
            <Hero text="About me"/>

            <div className="text-white fs-5 my-5">
                <div className="p-5">
                    <h1 className="display-5 fw-semibold md-2 text-center">Welcome to Cineplex: Your Comprehensive Guide to Cinema</h1>
                    <p className="fs-3">Cineplex welcomes you to a world of cinematic exploration. Whether you're a seasoned aficionado or a curious newcomer, we aim to be your definitive resource for all things film.</p>
                </div>

                <div className="p-5">
                    <h1 className="display-5 fw-semibold md-2 text-center">Embrace the world of cinema with Cineplex.</h1> 
                    <p className="fs-3">Let us guide you on a journey of discovery, fostering a deeper appreciation for the art of film.</p>
                </div>

                <h1 className="display-1 my-5 text-center">Explore the endless possibilities. Welcome to Cineplex.</h1>                
            </div>
        </>
    );
}


export default About;