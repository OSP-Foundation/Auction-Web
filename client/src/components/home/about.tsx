import React from 'react'
import Titles from './titles'
import { AboutImg, Avatars } from '@/assets/image'
import './style.scss'

const About = () => {
    return (
        <section className='p-container md:p-container-md flex flex-col gap-4'>
            <Titles
                title={{
                    h1: ['about'],
                    span: ['US']
                }}
                sub="Your bidding adventure starts now"
            />

            <div
                className='max-w-3xl relative w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center'
            >
                <img
                    className='max-w-sm w-full mx-auto'
                    src={AboutImg.src}
                />
                <p
                    className='ml-0 mt-[-5rem] md:ml-[-3rem] md:mt-auto capitalize text-sm shadow-primary-box-shadow bg-primary-bg border border-primary-border rounded-md p-3 text-center font-light text-primary-black cursor-pointer easy-in-out duration-500 hover:-translate-y-6'
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div
                id='about-big-card'
                className="max-w-3xl w-full overflow-hidden rounded-md bg-primary-blue px-3 py-[5rem] mx-auto mt-[3rem]"
            >
                <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="circles" />

                    <div className="balls-l" />

                    <div className="balls-r" />
                </div>

                <div className='w-full flex flex-col gap-2 items-center justify-center relative'>
                    <div className='flex flex-row justify-center items-center mx-auto'>
                        <img
                            src={Avatars?.One}
                            className='w-10 h-10 rounded-full border-2 border-white bg-[#facc15]'
                        />
                        <img
                            src={Avatars?.Two}
                            className='w-10 h-10 -ml-2 rounded-full border-2 border-white bg-[#fb923c]'
                        />
                        <img
                            src={Avatars?.Three}
                            className='w-10 h-10 -ml-2 rounded-full border-2 border-white bg-[#f87171]'
                        />
                        <img
                            src={Avatars?.Four}
                            className='w-10 h-10 -ml-2 rounded-full border-2 border-white bg-[#a3e635]'
                        />
                        <img
                            src={Avatars?.Five}
                            className='w-10 h-10 -ml-2 rounded-full border-2 border-white bg-[#e879f9]'
                        />
                    </div>
                    <h5
                        className='font-medium capitalize text-md text-primary-bg'
                    >
                        ready to collabrate?
                    </h5>
                    <h1 className='capitalize font-medium text-center text-2xl sm:text-3xl text-white'>
                        start on bidding in buildings
                    </h1>
                    <button
                        className='bg-white px-3 py-2 text-sm text-primary-black rounded capitalize easy-in-out duration-500 hover:text-secondary-blue hover:bg-primary-grey'
                    >
                        get started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About