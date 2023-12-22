import React from 'react'
import dynamic from 'next/dynamic'
import { Bider } from '@/components/single-item'
import { Amount } from '@/components'

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
                <div
                    id='left'
                    className="p-2 w-full flex flex-col gap-4"
                >
                    <Images
                        className={'hidden md:block'}
                        data={[{
                            url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
                        }, {
                            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        }, {
                            url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        }, {
                            url: "https://snext-final.com/files/topics/1068_ext_04_en_0.jpg"
                        }]}
                    />

                    <div className='flex flex-col gap-2'>
                        <h6 className='uppercase text-md font-semibold text-pure-black border-b border-primary-border pb-2'>description</h6>

                        <div className='text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div
                    id='right'
                    className="p-2 w-full flex flex-col gap-4 relative"
                >
                    <Images
                        className={'block md:hidden'}
                        data={[{
                            url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
                        }, {
                            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        }, {
                            url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        }, {
                            url: "https://snext-final.com/files/topics/1068_ext_04_en_0.jpg"
                        }]}
                    />

                    <h1
                        className='text-2xl font-semibold capitalize text-primary-black'
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h1>

                    <div className="flex flex-row items-center gap-3">
                        <div className='flex flex-row gap-2 items-center bg-primary-bg rounded-full px-2 py-1'>
                            <img
                                className='aspect-square object-center object-cover max-w-[2rem] w-full rounded-full border-2 border-primary-border'
                                src="https://wallpapers.com/images/hd/pretty-profile-pictures-i1rumnm6oi0lry1s.jpg"
                            />
                            <div className='pr-3'>
                                <p className='capitalize text-xs text-primary-grey'>owner</p>
                                <h6 className='max-w-[7rem] single-line text-xs font-medium text-primary-blue capitalize'>
                                    Achanya george
                                </h6>
                            </div>
                        </div>

                        <p className='mr-auto text-xs text-secondary-black capitalize'>from bid <Amount data={40} /></p>
                    </div>

                    <div className='grid grid-cols-4 gap-2 items-center mr-auto'>
                        <div>
                            <p className='text-xs font-semibold text-primary-black'>01</p>
                            <p className='text-xs text-primary-grey capitalize'>days</p>
                        </div>
                        <div>
                            <p className='text-xs font-semibold text-primary-black'>03</p>
                            <p className='text-xs text-primary-grey capitalize'>hours</p>
                        </div>
                        <div>
                            <p className='text-xs font-semibold text-primary-black'>54</p>
                            <p className='text-xs text-primary-grey capitalize'>minutes</p>
                        </div>
                        <div>
                            <p className='text-xs font-semibold text-primary-black'>20</p>
                            <p className='text-xs text-primary-grey capitalize'>seconds</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 items-center w-full max-w-lg'>
                        <h6
                            className='w-full uppercase text-sm font-semibold text-pure-black pb-2 border-b border-primary-border'
                        >
                            top bids
                        </h6>

                        <div className="flex flex-wrap gap-2 w-full">
                            {
                                [1, 2, 3, 4, 5]?.map((v, k: number) => {
                                    return <Bider
                                        data={{}}
                                        key={k}
                                    />
                                })
                            }
                        </div>
                    </div>

                    <div className="mt-5 flex flex-col items-center">
                        <p className='text-xs text-primary-grey capitalize mr-auto pb-1'>place your bid now</p>
                        <div className="flex flex-row border border-primary-border mr-auto rounded-full">
                            <input
                                className='max-w-[6rem] w-full px-3 text-sm text-primary-black rounded-l-full capitalize'
                                type="number"
                                placeholder='amount'
                            />
                            <input
                                className='max-w-[7rem] w-full px-2 text-sm text-primary-black border-l border-primary-border'
                                placeholder='Note'
                                type="text"
                            />
                            <button
                                className='px-5 py-2 capitalize bg-primary-black text-sm text-white rounded-full easy-in-out duration-500 hover:bg-pure-black'
                            >
                                bid
                            </button>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col gap-3 items-center w-full md:max-w-md'>
                        <h6
                            className='w-full max-w-sm mr-auto uppercase text-sm font-semibold text-pure-black pb-2 border-b border-primary-border'
                        >
                            bids
                        </h6>

                        <div
                            className="flex flex-col gap-2 w-full relative py-2"
                            id='live'
                        >
                            {
                                [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]?.map((v, k: number) => {
                                    return <Bider
                                        className='w-full gap-3 py-2 px-4'
                                        data={{ date: "20/12/2023 13:10" }}
                                        key={k}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page