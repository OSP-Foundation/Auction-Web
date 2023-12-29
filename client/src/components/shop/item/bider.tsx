import React from 'react'
import { Amount } from '@/components'
import './style.scss'

interface props {
    className?: string,
    data: {
        date?: string
    }
}

const Bider = ({ className, data }: props) => {
    return (
        <div
            id='bider-card'
            className={`max-w-sm px-3 py-2 cursor-pointer rounded-full bg-primary-bg flex flex-row gap-2 items-center ${className}`}
        >
            <img
                className='aspect-square object-center object-cover max-w-[2rem] w-full rounded-full border-2 border-primary-border'
                src="https://wallpapers.com/images/hd/pretty-profile-pictures-i1rumnm6oi0lry1s.jpg"
            />
            <div>
                <p className='capitalize text-xs text-primary-grey'>
                    <Amount
                        data={100}
                    />
                </p>
                <h6 className='single-line max-w-[7rem] font-medium text-xs text-primary-black capitalize'>
                    Aleena Benny
                </h6>
            </div>

            {
                data?.date && <p className='text-secondary-black ml-auto text-xs'>{data?.date}</p>
            }

            <div
                className='text-sm text-secondary-black comment'
            >
                my comment
            </div>
        </div>
    )
}

export default Bider