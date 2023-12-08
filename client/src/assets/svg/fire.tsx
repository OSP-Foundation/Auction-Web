import React, { FunctionComponent } from 'react'

interface params {
    width: string,
    height: string
}

const FireSvg: FunctionComponent<params> = ({ width, height }): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
        >
            <radialGradient
                id="IconifyId17ecdb2904d178eab8626"
                cx={68.884}
                cy={124.296}
                r={70.587}
                gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.314} stopColor="#ff9800" />
                <stop offset={0.662} stopColor="#ff6d00" />
                <stop offset={0.972} stopColor="#f44336" />
            </radialGradient>
            <path
                d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"
                fill="url(#IconifyId17ecdb2904d178eab8626)"
            />
            <radialGradient
                id="IconifyId17ecdb2904d178eab8627"
                cx={64.921}
                cy={54.062}
                r={73.86}
                gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.214} stopColor="#fff176" />
                <stop offset={0.328} stopColor="#fff27d" />
                <stop offset={0.487} stopColor="#fff48f" />
                <stop offset={0.672} stopColor="#fff7ad" />
                <stop offset={0.793} stopColor="#fff9c4" />
                <stop offset={0.822} stopColor="#fff8bd" stopOpacity={0.804} />
                <stop offset={0.863} stopColor="#fff6ab" stopOpacity={0.529} />
                <stop offset={0.91} stopColor="#fff38d" stopOpacity={0.209} />
                <stop offset={0.941} stopColor="#fff176" stopOpacity={0} />
            </radialGradient>
            <path
                d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"
                fill="url(#IconifyId17ecdb2904d178eab8627)"
            />
        </svg>
    )
}

export default FireSvg