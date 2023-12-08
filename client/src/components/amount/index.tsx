import React, { FunctionComponent } from 'react'

interface params {
    data: string | number
}

const Amount: FunctionComponent<params> = ({ data }): string => {
    return `$${data}`
}

export default Amount