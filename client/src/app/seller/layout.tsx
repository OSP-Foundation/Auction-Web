import { Window } from '@/assets/svg/seller'
import React from 'react'

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <main
            id='seller-panel'
            className='p-container md:p-container-md md:pt-[5rem] flex flex-row gap-3 mx-auto max-w-7xl w-full'
        >
            <section
                className='pl-4 py-4 bg-primary-bg rounded-lg flex flex-col gap-4'
            >
                <button
                    className='p-1 mr-4'
                >
                    <Window
                        width='2.5rem'
                        height='2.5rem'
                        classPath='stroke-primary-grey'
                    />
                </button>
                <button
                    className='bg-white p-1 pr-4 rounded-l-full'
                >
                    <Window
                        width='2.5rem'
                        height='2.5rem'
                        classPath='stroke-primary-blue'
                    />
                </button>
            </section>
            {children}
        </main>
    )
}

export default Layout