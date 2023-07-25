import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Gautam,nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>
                I'm a Full Stack web developer, specializing in creating dynamic and interactive websites. 
               I bring ideas to life by crafting efficient and engaging web experiences.Additionally, my passion 
               for technology extends to the realm of Web 3.0, where I eagerly explore decentralized applications 
               and blockchain technology ,constantly expanding my knowledge in this exciting field, staying abreast
               of the latest developments and seeking opportunities to leverage the potential of Web 3.0 in my projects.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About