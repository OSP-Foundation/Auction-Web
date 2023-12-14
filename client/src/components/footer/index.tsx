import { Tree } from '@/assets/svg'
import React, { FunctionComponent } from 'react'


const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer className="bg-white">
       <div className='p-container md:p-container-md grid md:grid-cols-12  sm:grid-cols-none'> 
        <div className="col-span-3 max-w-sm">
          <div className='flex'>
            <Tree
              width='2rem'
              height='2rem'
              className='fill-primary-blue mr-4'
            />
            <h4 className='font-bold text-3xl'>
              BidingX
            </h4>
          </div>
          <p className='mt-2 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima tempore
          </p>
          <div className="grid grid-cols-[auto_auto] items-center mt-5 bg-primary-bg border border-primary-border rounded-full p-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent w-full rounded-full p-2 outline-none focus:outline-none" />
            <button
              type="submit"
              className="ml-auto bg-primary-blue text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-span-9 grid md:grid-cols-4 gap-4  sm:grid-cols-none ">
          <div className='text-secondary-black' >
            <h3 className='font-bold text-primary-black   mb-3'>Enterprice</h3>
            <ul>
              <li >About </li>
              <li>Explore</li>
              <li>Our service</li>
            </ul>
          </div>
          <div className='text-secondary-black' >
            <h3 className='font-bold text-primary-black   mb-3'>Enterprice</h3>
            <ul>
              <li >About </li>
              <li>Explore</li>
              <li>Our service</li>
            </ul>
          </div>
          <div className='text-secondary-black' >
            <h3 className='font-bold text-primary-black   mb-3'>Enterprice</h3>
            <ul>
              <li >About </li>
              <li>Explore</li>
              <li>Our service</li>
            </ul>
          </div>
          <div className='text-secondary-black' >
            <h3 className='font-bold text-primary-black   mb-3'>Enterprice</h3>
            <ul>
              <li >About </li>
              <li>Explore</li>
              <li>Our service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer