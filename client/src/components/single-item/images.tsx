"use client"

import React, { Fragment, useRef, useState } from 'react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import './style.scss'

const Images = () => {
    const ref = useRef<SwiperType>()

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <Fragment>
            <Swiper
                modules={[Thumbs]}
                id='item_imgs'
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    ref.current = swiper
                }}
            >
                {
                    [1, 1, 1, 1]?.map?.((v, key: number) => {
                        return (
                            <SwiperSlide key={key}>
                                <div id="img">
                                    {
                                        key == 3 ? <img
                                            src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg'
                                        /> : <img
                                            src={'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'}
                                        />
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <Swiper
                modules={[Thumbs]}
                id='item_thumbs'
                className='flex mt-2'
                spaceBetween={10}
                slidesPerView={5}
                slideToClickedSlide
                onSwiper={setThumbsSwiper}
            >
                {
                    [1, 1, 1, 1]?.map?.((v, key: number) => {
                        return (
                            <SwiperSlide
                                key={key}
                                id='img'
                                className='cursor-pointer'
                            >
                                {
                                    key == 3 ? <img
                                        src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg'
                                    /> : <img
                                        src={'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'}
                                    />
                                }
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Fragment>
    )
}

export default Images