import React from 'react'

interface props {
    width: string;
    height: string;
    className?: string;
    classPath?: string
}

const Window = ({ width, height, className, classPath }: props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20 12V6C20 4.89543 19.1046 4 18 4H12M20 12V18C20 19.1046 19.1046 20 18 20H12M20 12H12M4 12V18C4 19.1046 4.89543 20 6 20H12M4 12V6C4 4.89543 4.89543 4 6 4H12M4 12H12M12 12V4M12 12V20"
                className={classPath}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Window