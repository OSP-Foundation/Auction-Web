import React, { FunctionComponent } from 'react'

interface props {
    width: string,
    height: string,
    className?: string
}

const Prev: FunctionComponent<props> = ({ className, width, height }): JSX.Element => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            id="XMLID_54_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
        >
            <g id="previous">
                <g>
                    <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3  " />
                </g>
            </g>
        </svg>
    )
}

export default Prev