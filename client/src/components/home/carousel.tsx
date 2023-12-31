"use client"

import React, { useRef } from 'react'
import { More, Next, Prev } from '@/assets/svg'
import { Card } from '..';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Titles from './titles';

// Import Swiper styles
import 'swiper/css';

// Import Manual Styled Styles
import './style.scss'

const Carousel = () => {
    const navs = useRef<{
        prev?: HTMLButtonElement,
        next?: HTMLButtonElement
    }>({})

    return (
        <section
            className='p-container md:p-container-md max-w-7xl w-full mx-auto flex flex-col'
            id='carousel-home'
        >
            <Titles
                title={{
                    h1: ['The', 'Provides Variety Of'],
                    span: ['Sellers', 'Service/Products']
                }}
                sub="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s"
            />

            <div className='flex flex-col gap-5 mt-[2.5rem] w-full mx-auto'>
                <div className='flex flex-row gap-3 items-center'>
                    <h1 className='text-xl text-primary-black font-medium capitalize mr-auto'>
                        limited auction
                    </h1>

                    <div className='flex flex-row items-center gap-2'>
                        <button
                            className='px-3 py-2 flex items-center justify-center text-center text-sm rounded border border-secondary-black bg-secondary-black easy-in-out duration-500 hover:bg-primary-black hover:border-primary-black'
                            ref={(elm) => {
                                if (navs?.current && elm) {
                                    navs.current.prev = elm
                                }
                            }}
                        >
                            <Prev
                                width='15px'
                                height='15px'
                                className='fill-white'
                            />
                        </button>
                        <button
                            className='px-3 py-2 flex items-center justify-center text-center text-sm rounded border border-secondary-black bg-secondary-black easy-in-out duration-500 hover:bg-primary-black hover:border-primary-black'
                            ref={(elm) => {
                                if (navs?.current && elm) {
                                    navs.current.next = elm
                                }
                            }}
                        >
                            <Next
                                width='15px'
                                height='15px'
                                className='fill-white'
                            />
                        </button>
                    </div>

                    <button
                        className='flex flex-row gap-2 text-[15px] capitalize border border-primary-border rounded px-3 py-2 text-primary-black items-center justify-center text-center easy-in-out duration-500 hover:border-primary-blue'
                    >
                        <More
                            width='15px'
                            height='15px'
                            className='fill-primary-black'
                        />
                    </button>
                </div>

                <div className='relative'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={1}
                        navigation={{
                            prevEl: navs.current?.prev,
                            nextEl: navs.current?.next
                        }}
                        onSwiper={(swiper) => {
                            if ('navigation' in swiper?.params &&
                                typeof swiper?.params?.navigation == 'object'
                            ) {
                                swiper.params.navigation.prevEl = navs?.current?.prev
                                swiper.params.navigation.nextEl = navs?.current?.next
                            }

                            // Re-init navigation
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        }}
                        breakpoints={{
                            515: {
                                slidesPerView: 2
                            },
                            700: {
                                slidesPerView: 3
                            },
                            767: {
                                slidesPerView: 2
                            },
                            875: {
                                slidesPerView: 3
                            },
                            1050: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((v, k: number) => {
                                return <SwiperSlide
                                    key={k}
                                >
                                    <Card />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Carousel