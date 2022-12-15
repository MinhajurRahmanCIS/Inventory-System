import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const ServiceDisplay = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://inventory-server-nine.vercel.app/displayService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mb-10'>
            <div className='text-center mb-8'>
                <p className="text-4xl font-bold text-indigo-300">Products</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <div key={service._id} className="card card-compact w-96 bg-base-300 shadow-xl">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={service.img}>
                                    <img src={service.img} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p className='text-2xl text-indigo-400 font-semibold'>Price: ${service.price} </p>
                            <div className="card-actions justify-end">
                                <Link to={`/checkout/${service._id}`}>
                                    <button className="btn btn-secondary">Buy</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/services'> <button className="btn btn-outline btn-secondary">See all</button></Link>
            </div>
        </div>
    );
};

export default ServiceDisplay;