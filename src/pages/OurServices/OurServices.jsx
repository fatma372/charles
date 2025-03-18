import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function OurServices() {
    const services = [
        {
            title: 'Business Services',
            description: 'The tiny ship today stiller',
            image: '/a.jpg',
        },
        {
            title: 'Consumer Product',
            description: 'The tiny ship today stiller',
            image: '/b.jpg',
        },
        {
            title: 'Financial Services',
            description: 'The tiny ship today stiller',
            image: '/c.jpg',
        },
        {
            title: 'Travel and Aviation',
            description: 'The tiny ship today stiller',
            image: '/d.jpg',
        },
        {
            title: 'Software Research',
            description: 'The tiny ship today stiller',
            image: '/e.jpg',
        },
        {
            title: 'Quality Resourcing',
            description: 'The tiny ship today stiller',
            image: '/f.jpg',
        }
    ]
    return (
        <section id='our-services' className='flex flex-col justify-center items-center py-20 gap-3'>
            <h2 className='text-center text-3xl font-bold'>
                Our SERVICES
            </h2>

            <div className='w-[30px] h-[5px] bg-gray-300 rounded-lg' />

            <p className='text-center text-gray-800 px-2'>
                A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
            </p>

            <div className="services-list lg:px-20 container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {
                    services.map((service, index) => (
                        <div key={index} className="service-card pr-5 border-1 border-gray-300 flex gap-3 shadow-md rounded-sm">
                            <img src={service.image} alt="service" />
                            <div className='flex flex-col justify-center p-2'>
                                <h3 className='font-bold text-lg text-gray-800'>
                                    {service.title}
                                </h3>
                                <p className='text-gray-800'>
                                    {service.description}
                                </p>
                                <a href='/' className="mt-2 text-blue-900 ">
                                    LEARN MORE
                                    <FontAwesomeIcon icon={faChevronRight} className='mt-1 ml-2' size={'sm'} />
                                </a>
                            </div>
                        </div>
                    ))
                }

            </div>
            <p className='px-3 text-center text-lg'>
            You can also send us an email and we’ll get in touch shortly, or Call us
            </p>
            <p className='px-3 text-center text-lg text-blue-900 border-b-1'>
            info@support.com (or) +1 234 6780 900
            </p>
        </section>
    )
}
