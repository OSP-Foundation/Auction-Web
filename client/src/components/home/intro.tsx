import React, { FunctionComponent } from 'react'
import { Fire } from '@/assets/svg'
import { Amount } from '..'
import './style.scss'

const Intro: FunctionComponent = (): JSX.Element => {
    return (
        <section
            className='p-container md:p-container-md bg-primary-bg flex flex-col md:flex-row gap-3'
            id='intro-home'
            data-image-credit="https://www.freepik.com/"
            data-alt="https://www.freepik.com/"
            data-freepik="https://www.freepik.com/"
        >
            <div
                className="flex flex-col gap-3 py-[4rem] children"
            >
                <h1
                    className='text-6xl font-medium capitalize text-primary-black'
                >
                    Bid your <br />
                    dream <span className='text-primary-blue'>place.</span>
                </h1>
                <p className='md:max-w-md text-md text-secondary-black capitalize'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>

                <div className="flex flex-row gap-7 items-center">
                    <button className='capitalize flex items-center justify-center text-sm px-7 py-[11px] bg-primary-blue rounded text-white easy-in-out duration-500 hover:bg-secondary-blue'>
                        explore&nbsp;&#8594;
                    </button>
                    <button className='capitalize flex items-center justify-center text-sm bg-transparent rounded text-primary-black easy-in-out duration-500 hover:text-primary-blue'>
                        create
                    </button>
                </div>
            </div>
            <div className='ml-auto w-auto h-auto mt-auto'>
                <div className="card p-3 bg-white flex flex-col gap-3 border border-primary-border rounded-md shadow-primary-box-shadow">
                    <div className='flex flex-row gap-4 items-center'>
                        <h1 className='text-primary-black min-w-[8rem] capitalize text-sm font-bold flex flex-row gap-1 items-center'>
                            highest price<Fire
                                width='20px'
                                height='20px'
                            />
                        </h1>

                        <button
                            className='ml-auto min-w-[6rem] text-center px-4 py-2 border border-primary-border text-xs bg-white text-primary-black font-bold rounded capitalize easy-in-out duration-500 hover:border-primary-blue'
                        >
                            place bid
                        </button>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <img
                            className='rounded-full aspect-square w-8 object-cover object-center'
                            src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"
                            alt="profile"
                        />
                        <div>
                            <h6 className='text-xs max-w-[7rem] single-line font-bold text-primary-black capitalize'>
                                wanda
                            </h6>
                            <p className='text-xs max-w-[7rem] single-line text-primary-grey'>
                                @wanda
                            </p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-xs text-primary-grey capitalize'>price</p>
                            <h6 className='text-xs text-primary-black mt-1'>
                                <Amount data={10} />
                            </h6>
                        </div>
                    </div>

                    <div className='border-t border-primary-border'>
                        <div className="flex flex-row gap-3 items-center mt-2">
                            <img
                                className='rounded-full aspect-square w-7 object-cover object-center'
                                src="https://wallpapers.com/images/hd/pretty-profile-pictures-i1rumnm6oi0lry1s.jpg"
                                alt="profile"
                            />
                            <div>
                                <h6 className='text-xs text-primary-grey capitalize'>
                                    owner
                                </h6>
                                <p className='text-xs max-w-[7rem] single-line text-primary-black'>
                                    @wanda
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro