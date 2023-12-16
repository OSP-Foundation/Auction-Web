import { Biding, Sale } from '@/assets/svg'
import React from 'react'
import Titles from './titles'

const Service = () => {
    return (
        <section className='p-container md:p-container-md pt-[3rem] md:pt-[5rem] flex flex-col gap-4'>
            <Titles
                title={{
                    h1: ['The', 'that you get from'],
                    span: ['service', 'here']
                }}
                sub="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl w-full mx-auto">
                <div className="p-3 bg-primary-bg border border-primary-border rounded w-full flex flex-row gap-3 items-center easy-in-out duration-500 hover:bg-white cursor-pointer">
                    <div className='bg-primary-border rounded-full aspect-square p-2'>
                        <Biding
                            width='2rem'
                            height='2rem'
                            className='fill-primary-blue'
                        />
                    </div>
                    <div>
                        <h5 className='capitalize text-lg text-primary-black font-medium'>
                            bid product/service
                        </h5>
                        <p className='text-secondary-black text-sm font-light'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
                <div className="p-3 bg-primary-bg border border-primary-border rounded w-full flex flex-row gap-3 items-center easy-in-out duration-500 hover:bg-white cursor-pointer">
                    <div className='bg-primary-border rounded-full aspect-square p-2'>
                        <Sale
                            width='2rem'
                            height='2rem'
                            className='fill-primary-blue'
                        />
                    </div>
                    <div>
                        <h5 className='capitalize text-lg text-primary-black font-medium'>
                            sell product/service
                        </h5>
                        <p className='text-secondary-black text-sm font-light'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service