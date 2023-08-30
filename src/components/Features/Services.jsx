import React from 'react';
import ServicesData from './Services.json';
import { FaLeaf, FaLock, FaAnchor, FaCalendarAlt, FaDropbox, FaPaperPlane } from 'react-icons/fa';

const iconComponents = {
    FaLeaf,
    FaLock,
    FaAnchor,
    FaCalendarAlt,
    FaDropbox,
    FaPaperPlane
};

function Services() {
    return (
        <div className='Container grid grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8'>
            {ServicesData.Services.map((service, index) => {
                const { icon, name, description } = service;
                const IconComponent = iconComponents[icon]; // Get the corresponding icon component
                return (
                    <div key={index} className='flex space-x-6 justify-center'>
                        <div>
                            <IconComponent className="text-[#FFCB00] text-[40px]" />
                        </div>
                        <div className='-mt-2'>
                            <h3 className='text-xl text-Secondary font-bold mb-3'>{name}</h3>
                            <p className='text-Primary'>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Services;
