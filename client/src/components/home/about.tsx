import React from 'react'
import Titles from './titles'

const About = () => {
    return (
        <section className='p-container md:p-container-md flex flex-col gap-4'>
            <Titles
                title={{
                    h1: ['about'],
                    span: ['us']
                }}
                sub="Your bidding adventure starts now"
            />

            <div className='max-w-3xl w-full'>

            </div>
        </section>
    )
}

export default About