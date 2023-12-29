import { Card } from '@/components';
import React from 'react';

const Page = () => {
  return (
    <main className='p-container md:p-container-md pt-[3rem] md:pt-[7em] w-full max-w-7xl mx-auto flex flex-col gap-5'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-6xl font-medium capitalize text-primary-black'>
            Bid your dream <span className='text-primary-blue'>place.</span>
          </h1>
        </div>

        <div className='ml-auto flex flex-row gap-2 items-center justify-between'>
          <select
            id='locationFilter'
            className='  border-blue-600 card-button w-auto  text-sm py-2 px-3 rounded'
          >

            <option value=''>All Locations</option>
            <option value='location1'>Location 1</option>
            <option value='location2'>Location 2</option>
          </select>

          <select
            id='priceSorting'
            className=' border-blue-600 card-button w-auto text-sm py-2 px-3 rounded'
          >
            <option value='lowToHigh'>Low to High</option>
            <option value='highToLow'>High to Low</option>
          </select>

          <select
            id='productService'
            className=' border-blue-600 card-button w-auto  text-sm py-2 px-3 rounded'
          >
            <option value='product'>Product</option>
            <option value='service'>Service</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {[1, 1, 1, 1, 1, 1, 1]?.map(() => {
          return <Card />;
        })}
      </div>
    </main>
  );
};

export default Page;
