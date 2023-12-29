import { Card } from '@/components';
import React from 'react';

const Page = () => {
  return (
    <main className='pt-[5rem]'>
  <div className='p-container md:p-container-md flex justify-between items-center'>
  <div>
    <h1 className='text-6xl font-medium capitalize text-primary-black'>
      Bid your dream <span className='text-primary-blue'>place.</span>
    </h1>
  </div>
  <div className='flex items-center justify-between p-4'>
      <div className='mr-4'>
        <select
          id='locationFilter'
          className='  border-blue-600 card-button w-auto  text-sm py-2 px-3 rounded'
        >
        
            <option value=''>All Locations</option>
            <option value='location1'>Location 1</option>
            <option value='location2'>Location 2</option>
        </select>
      </div>

      <div className='mr-4'>
        <select
          id='priceSorting'
          className=' border-blue-600 card-button w-auto text-sm py-2 px-3 rounded'
        >
          <option value='lowToHigh'>Low to High</option>
          <option value='highToLow'>High to Low</option>
        </select>
      </div>

      <div className='mr-4'>
        <select
          id='productService'
          className=' border-blue-600 card-button w-auto  text-sm py-2 px-3 rounded'
        >
          <option value='product'>Product</option>
          <option value='service'>Service</option>
        </select>
      </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Apply
      </button>
    </div>

</div>


     <div className='p-container md:p-container-md '>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {[1, 1, 1, 1, 1, 1, 1]?.map(() => {
              return <Card  />;
            })}
          </div>
     </div>
    </main>
  );
};

export default Page;
