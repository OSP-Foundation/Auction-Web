"use client"

import React, { useRef, useState } from 'react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import './style.scss'

interface props {
    data: Array<{
        url: string
    }>,
    className: string
}

const Images = ({ data, className }: props) => {
    const ref = useRef<SwiperType>()

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div
            id='single-item-imgs'
            className={className}
        >
            <Swiper
                modules={[Thumbs]}
                id='item_imgs'
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                autoHeight
                onSwiper={(swiper) => {
                    ref.current = swiper
                }}
            >
                {
                    data?.map?.((v, key: number) => {
                        return (
                            <SwiperSlide
                                key={key}
                                id="img"
                            >
                                <img
                                    src={v?.url}
                                />
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
                    data?.map?.((v, key: number) => {
                        return (
                            <SwiperSlide
                                key={key}
                                id='img'
                                className='cursor-pointer'
                            >
                                <img
                                    src={v?.url}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Images