import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import QuickContact from './../Components/QuickContact';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <QuickContact />
        </div>
    );
};

export default HomePage;
