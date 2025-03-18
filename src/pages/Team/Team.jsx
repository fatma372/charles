import React from 'react'

export default function Team() {
    const team=[
        {
            name: 'John Doe',
            role: 'Project Manager',
            image: '/p1.jpg',
        },
        {
            name: 'Jane Doe',
            role: 'Software Engineer',
            image: '/p2.jpg',
        },
        {
            name: 'Mike Doe',
            role: 'Marketing Manager',
            image: '/p4.jpg',
        },
        {
            name: 'Sam Doe',
            role: 'Customer Support',
            image: '/p1.jpg',
        }
    ]
  return (
   <section className='flex flex-col gap-3 justify-center items-center p-4 bg-gray-100'>
     <h2 className='text-center text-3xl font-bold'>
                Our Team
            </h2>

            <div className='w-[30px] h-[5px] bg-gray-300 rounded-lg' />

            <p className='text-center text-gray-800 px-2'>
                A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
            </p>

            <div className="team grid grid-cols-2 md:grid-cols-4 gap-5 m-3 py-5">
                {
                    team.map((member, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center text-center bg-gray-400 py-3 px-2 rounded-t-full">
                            <img src={member.image} alt={member.name} className="w-20 h-20 md:w-40 md:h-40 rounded-full object-cover" />
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-gray-900 ">{member.role}</p>
                        </div>
                    ))
                }
            </div>
   </section>
  )
}
