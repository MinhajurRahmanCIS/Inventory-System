import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';
import Updates from '../Updates/Updates';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceDisplay></ServiceDisplay>
            <About></About>
            <Updates></Updates>
        </div>
    );
};

export default Home;