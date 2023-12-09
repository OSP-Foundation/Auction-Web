import React, { FunctionComponent } from 'react'

interface props {
    width: string,
    height: string,
    className?: string
}

const Next: FunctionComponent<props> = ({ width, height, className }): JSX.Element => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            id="XMLID_287_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
        >
            <g id="next">
                <g>
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12  " />
                </g>
            </g>
        </svg>
    )
}

export default Next