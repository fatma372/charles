import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <>
           <section className='flex gap-10 p-20 justify-center'>
            <img src="/man.jpeg" className='lg:inline-block lg:w-[30vw] hidden' alt="man" />
            <div className='flex flex-col items-center gap-3 p-7 justify-center'>
                <h2 className='text-center text-3xl font-bold'>
                    About Our Company
                </h2>

                <div className='w-[40px] h-[5px] bg-gray-300 rounded-lg' />

                <p className='text-center text-gray-700'>
                    A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.
                </p>
                <p className='text-center text-gray-700'>
                    The government they survive as soldiers of fortune baby if you've ever wondered the east side to a deluxe apartment.
                </p>

                <div className='flex border-t-2 border-gray-400 justify-center text-blue-950'>
                    <div className="p-5 md:px-9 px-4 flex flex-col md:text-2xl text-xl md:gap-2 gap-1">
                        <FontAwesomeIcon icon={faStar} size='md:xl lg' />
                        <h3>
                            Vision
                        </h3>
                    </div>
                    <div className="p-5 second-icon md:px-9 px-4 flex flex-col md:text-2xl text-xl md:gap-2 gap-1">
                        <FontAwesomeIcon icon={faMedal} size='md:xl lg'/>
                        <h3>
                            Mission
                        </h3>
                    </div>
                    <div className="p-5 md:px-9 px-4 flex flex-col md:text-2xl text-xl md:gap-2 gap-1">
                        <FontAwesomeIcon icon={faBullseye} size='md:xl lg' />
                        <h3>
                            Goals
                        </h3>
                    </div>
                </div>
            </div>
            
           </section>
           <div className='about-second-part flex flex-col justify-center items-center gap-4'>
                <p className='md:text-3xl text-xl font-bold text-white text-center container'>
                We provide high quality services & innovative solutions for the realiable growth
                </p>
                <button className='dark-btn border-2 px-5 py-2 font-bold text-white bg-gray-900 border-gray-900 inline-block rounded-lg transition-colors duration-200'>
                        GET A QUOTES
                    </button>
            </div>
        </>
    )
}
