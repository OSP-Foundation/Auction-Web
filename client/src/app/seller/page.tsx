import React from 'react'
import { Card } from '@/components/seller'
import './style.scss'

const Page = () => {
  return (
    <section
      id='list'
    >
      {
        [1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((v, k: number) => {
          return <Card />
        })
      }
    </section>
  )
}

export default Page