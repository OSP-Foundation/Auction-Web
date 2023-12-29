import { Amount } from '@/components'
import React from 'react'

const Card = () => {
    return (
        <div
            className='rounded-md bg-primary-bg'
        >
            <img
                className='w-full aspect-[7/5] object-center object-cover rounded-t-md'
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            />

            <div className='p-2 flex flex-col gap-1'>
                <h1 className='text-sm text-primary-black font-medium capitalize single-line'>
                    Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className='text-xs text-secondary-black'>
                    <Amount data={125} />
                </p>

                <div className="grid grid-cols-2 gap-1">
                    <button
                        className='text-sm capitalize font-medium rounded-md p-1 border border-primary-blue text-white bg-primary-blue easy-in-out duration-500 hover:bg-white hover:text-primary-black'
                    >
                        view
                    </button>
                    <button
                    className='text-sm capitalize font-medium rounded-md p-1 border border-primary-blue text-primary-black bg-white easy-in-out duration-500 hover:bg-primary-blue hover:text-white'
                    >
                        delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card