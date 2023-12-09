// components/Card.tsx
import React, { FunctionComponent } from 'react';
import { Amount } from '..';
import './style.scss';

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div
      className="relative rounded-lg w-full"
      id='card'
    >
      <img
        className="w-full rounded-lg h-auto object-cover object-left-top card-img aspect-[9/11]"
        src="https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-product-coloured-bg.jpg"
        alt="image"
      />

      <div className='absolute bg-transparent px-2 bottom-2 left-0 w-full'>
        <div className="rounded-t-lg grid grid-cols-[calc(100%-4.5rem)_4rem] gap-[.5rem] bg-sub text-white p-4">
          <div className="text-left">
            <h6 className="text-xs capitalize oneLine font-bold">Splash Circle this worked for me when I removed width from breakpoint and</h6>
          </div>
          <div className="text-right ml-auto">
            <h6 className="text-xs font-bold whitespace-nowrap">1:20:00</h6>
          </div>
        </div>

        <div className="bg-white rounded-b-lg">
          <div className="text-left px-4 py-3">
            <h6 className="text-xs text-primary-black oneLine capitalize font-bold">Stark Lee this worked for me when I removed width from breakpoint and</h6>
            <p className="text-sm oneLine text-secondary-black">@Max Well</p>
          </div>

          <div className="pb-3 px-4 w-full flex flex-row gap-3">
            <button className="bg-primary-blue card-button w-auto text-white text-sm py-2 px-3 rounded">
              Place Bid
            </button>

            <div className="text-right ml-auto">
              <h6 className="text-xs text-secondary-black font-bold whitespace-nowrap capitalize">Current bid</h6>
              <p className="text-sm text-primary-black font-bold">
                <Amount
                  data={100000}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
