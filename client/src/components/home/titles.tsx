import React from 'react'

interface props {
    sub: string,
    title: {
        h1: [string, string?],
        span?: [string?, string?]
    }
}

const Titles = ({ sub, title }: props) => {
    return (
        <div className='text-center font-bold flex flex-col gap-1 items-center justify-center'>
            <h1 className='text-2xl capitalize text-primary-black'>
                {title?.h1?.[0]}
                {title?.span?.[0] && <span className='text-primary-blue'>&nbsp;{title?.span?.[0]}</span>}
                {title?.h1?.[1] && <>&nbsp;{title?.h1?.[1]}</>}
                {title?.span?.[1] && <span className='text-primary-blue'>&nbsp;{title?.span?.[1]}</span>}
            </h1>

            <p className='text-sm capitalize text-primary-grey font-light max-w-sm'>
                {sub}
            </p>
        </div>
    )
}

export default Titles