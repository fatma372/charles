import React from 'react'

export default function HomePage() {
    return (
        <>
            <main className='min-h-[60svh] flex items-center'> 
                <div className="main-layout p-7 ">
                <p className='text-gray-900 md:text-2xl text-lg'>
                    The government they survive artical of fortune
                </p>
                <p className='text-gray-900 md:text-6xl text-4xl font-bold my-5' >
                    We IMPROVE YOUR
                    SALES EFFICIENCY
                </p>

                <button className='py-2 px-5 shadow-lg text-gray-900 bg-white border-2 border-white hover:text-white hover:bg-gray-900 hover:border-gray-900 rounded-md transition-colors duration-200'>
                    CONTACT US
                </button>
                </div>
            </main>
            <div className="services grid lg:grid-cols-4 grid-cols-2 ">
                <div className="service flex flex-col gap-3 justify-center items-center p-4 bg-gray-100 border-b-2 border-transparent hover:border-b-2 hover:border-gray-900">
                    <img src="/1.png" alt="" />
                    <h2 className='font-bold text-lg text-center'>
                        Consumer Insights
                    </h2>
                    <div className='w-[50px] h-[5px] bg-gray-300 rounded-lg' />
                    <p className='text-center'>
                        Our experts will help you understand your market trends and preferences.
                    </p>
                </div>
                <div className="service flex flex-col gap-3 justify-center items-center p-4 bg-gray-200 border-b-2 border-transparent hover:border-b-2 hover:border-gray-900">
                    <img src="/mic.png" alt="" />
                    <h2 className='font-bold text-lg text-center'>
                        Emirging Ideas
                    </h2>
                    <div className='w-[50px] h-[5px] bg-gray-300 rounded-lg' />
                    <p className='text-center'>
                        Our experts will help you understand your market trends and preferences.
                    </p>
                </div>
                <div className="service flex flex-col gap-3 justify-center items-center p-4 bg-gray-300 border-b-2 border-transparent hover:border-b-2 hover:border-gray-900">
                    <img src="/persons.png" alt="" />
                    <h2 className='font-bold text-lg text-center'>
                        Thought Leadership
                    </h2>
                    <div className='w-[50px] h-[5px] bg-gray-300 rounded-lg' />
                    <p className='text-center'>
                        Our experts will help you understand your market trends and preferences.
                    </p>
                </div>
                <div className="service flex flex-col gap-3 justify-center items-center p-7 bg-gray-400 border-b-2 border-transparent hover:border-b-2 hover:border-gray-900">
                    <img src="/4.png" alt="" />
                    <h2 className='font-bold text-lg text-center'>
                        Marketing Goals
                    </h2>
                    <div className='w-[50px] h-[5px] bg-gray-300 rounded-lg' />
                    <p className='text-center'>
                        Our experts will help you understand your market trends and preferences.
                    </p>
                </div>
            </div>
        </>
    )
}
