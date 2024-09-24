import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructorsMan = [
    { id: 1, name: "Jituraj", designation: 'Vocal Coach', image: "https://via.placeholder.com/150" },
    { id: 2, name: "Anjali", designation: 'Piano Instructor', image: "https://via.placeholder.com/150" },
    { id: 3, name: "Rahul", designation: 'Guitar Teacher', image: "https://via.placeholder.com/150" },
    { id: 4, name: "Sneha", designation: 'Violin Teacher', image: "https://via.placeholder.com/150" },
    { id: 5, name: "Vikram", designation: 'Drum Instructor', image: "https://via.placeholder.com/150" }
];

function Instructors() {
    return (
    <div
        className='relative h-[40rem] overflow-hidden flex items-center justify-center'
        >
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'> 
                <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
                <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will gudide your musical journey</p>

                <div className='flex flex-row items-center justify-center mb-10 w-full'>
                    <AnimatedTooltip 
                            items={instructorsMan}
                    />
                </div>

            </WavyBackground>
        </div>
    )
}

export default Instructors