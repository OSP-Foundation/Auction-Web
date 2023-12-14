"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Avatar, MagnifyingGlass } from '@/assets/svg'
import './style.scss'

const NavBar = () => {
    const [search, setSearch] = useState<boolean | string>(false);

    return (
        <header
            id='navBar'
            className='p-container py-4 md:p-container-md md:py-4 shadow-primary-box-shadow flex flex-col gap-2 items-center'
        >
            <div className='flex flex-col md:flex-row gap-3 md:gap-5 items-center w-full'>
                <div className="flex flex-row w-full md:w-auto items-center gap-2">
                    <button
                        className='group block md:hidden'
                    >
                        <Avatar
                            width='20px'
                            height='20px'
                            className='pointer-events-none'
                            classPath='stroke-secondary-black easy-in-out duration-500 group-hover:stroke-primary-blue'
                        />
                    </button>

                    <h1 className='text-xl mx-auto md:mx-0 text-primary-black font-bold capitalize'>
                        Dream <span className='text-primary-blue'>Auction</span>
                    </h1>

                    <button
                        className='group block md:hidden'
                        onClick={() => {
                            setSearch((state) => !state ? true : false)
                        }}
                    >
                        {
                            search ? <span className='text-secondary-black text-md easy-in-out duration-500 group-hover:text-primary-blue'>
                                &#10005;
                            </span> : <MagnifyingGlass
                                width='20px'
                                height='20px'
                                className='pointer-events-none fill-secondary-black easy-in-out duration-500 group-hover:fill-primary-blue'
                            />
                        }
                    </button>
                </div>
                <div className='mx-auto md:mr-0 md:ml-auto flex flex-row items-center gap-3'>
                    <Link
                        className='capitalize text-sm text-secondary-black easy-in-out duration-500 hover:text-primary-blue'
                        href={'#'}
                    >
                        home
                    </Link>
                    <Link
                        className='capitalize text-sm text-secondary-black easy-in-out duration-500 hover:text-primary-blue'
                        href={'#'}
                    >
                        Service
                    </Link>
                    <Link
                        className='capitalize text-sm text-secondary-black easy-in-out duration-500 hover:text-primary-blue'
                        href={'#'}
                    >
                        products
                    </Link>
                    <Link
                        className='capitalize text-sm text-secondary-black easy-in-out duration-500 hover:text-primary-blue'
                        href={'#'}
                    >
                        about
                    </Link>

                    <button
                        className='hidden md:block group'
                        onClick={() => {
                            setSearch((state) => !state ? true : false)
                        }}
                    >
                        {
                            search ? <span className='text-secondary-black text-md easy-in-out duration-500 group-hover:text-primary-blue'>
                                &#10005;
                            </span> : <MagnifyingGlass
                                width='20px'
                                height='20px'
                                className='pointer-events-none fill-secondary-black easy-in-out duration-500 group-hover:fill-primary-blue'
                            />
                        }
                    </button>

                    <button
                        className='group login text-sm capitalize md:px-4 md:py-2 md:rounded'
                    >
                        login
                    </button>
                </div>
            </div>

            {
                search && (
                    <form className="search py-1 bg-white border border-primary-border rounded max-w-sm mx-auto flex flex-row items-center w-full justify-center">
                        <input
                            className='w-full h-full px-3 py-1 text-sm text-primary-black'
                            type="text"
                            placeholder='Search Service/Product'
                            value={typeof search == 'string' ? search : ''}
                            onChange={(e) => {
                                setSearch(e?.target?.value ? e?.target?.value : true)
                            }}
                        />
                        <button className='group h-full px-2'>
                            <MagnifyingGlass
                                width='20px'
                                height='20px'
                                className='pointer-events-none fill-primary-black group-hover:fill-primary-blue'
                            />
                        </button>
                    </form>
                )
            }
        </header >
    )
}

export default NavBar