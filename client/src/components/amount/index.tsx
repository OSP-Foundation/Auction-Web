import React, { FunctionComponent } from 'react'

interface props {
    data: string | number
}

const Amount: FunctionComponent<props> = ({ data }): string => {
    let number: number = typeof data == 'string' ? parseFloat(data) : Number(data)

    if (number >= 10000000) {
        return `${(number / 10000000).toFixed(2) + ' Cr'}`;
    } else if (number >= 100000) {
        return `${(number / 100000).toFixed(2) + ' Lakh'}`;
    }

    return `$${data}`
}

export default Amount