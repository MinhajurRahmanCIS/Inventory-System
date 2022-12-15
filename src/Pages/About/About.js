import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const About = () => {
    return (
        <div className='mb-10 text-center'>
            <div className='text-center mb-8'>
                <p className="text-4xl font-bold text-indigo-300"><span className='text-slate-500'>TEAM</span> Runtime TError</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                   <div className="card card-compact w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl">Md. Minhajur Rahman</h2>
                            <p className='text-3xl text-indigo-400 font-semibold'>ID: 193-16-477</p>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl">Kashipia Hansan Orpa</h2>
                            <p className='text-3xl text-indigo-400 font-semibold'>ID: 193-16-467</p>
                        </div>
                    </div>
                   <div className="card card-compact w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl">Md. Mushfiqur Mhamud</h2>
                            <p className='text-3xl text-indigo-400 font-semibold'>ID: 193-16-461</p>
                        </div>
                    </div>
                   <div className="card card-compact w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl">Md. Hasibur Rahman Rafat</h2>
                            <p className='text-3xl text-indigo-400 font-semibold'>ID: 193-16-483</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default About;