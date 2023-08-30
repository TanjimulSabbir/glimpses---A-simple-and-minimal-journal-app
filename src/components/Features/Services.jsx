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
        <div>
            {ServicesData.Services.map((service, index) => {
                const { icon, name, description } = service;
                const IconComponent = iconComponents[icon]; // Get the corresponding icon component
                return (
                    <div key={index} className='flex flex-col'>
                        <div>
                            <IconComponent />
                        </div>
                        <div className=''>
                            <h3 className='text-lg text-Secondary font-bold mb-3 lora'>{name}</h3>
                            <p className='text-Primary raleway'>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Services;
