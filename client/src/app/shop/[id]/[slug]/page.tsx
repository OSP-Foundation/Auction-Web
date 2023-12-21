import React from 'react'
import dynamic from 'next/dynamic'

const Images = dynamic(() => import('@/components/single-item/images'), { ssr: false })

import './style.scss'

const Page = () => {
    return (
        <main
            className='p-container md:p-container-md md:pt-[5rem] flex'
            id='single-item'
        >
            <section
                className='max-w-7xl w-full mx-auto'
                id='main'
            >
                <div className="p-2 w-full">
                    <Images />
                </div>
                <div className="p-2 w-full border">

                </div>
            </section>
        </main>
    )
}

export default Page