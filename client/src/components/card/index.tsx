// components/Card.tsx
import React, { FunctionComponent } from 'react';
import './card.scss';

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div className="flex flex-col rounded justify-center shadow-lg bg-primary-bg items-center w-full"
      id='card'
    >
      <div className="relative w-full">
        <img
          className="w-full rounded-t h-auto object-cover object-center card-img aspect-[4/5]"
          src="https://images.unsplash.com/photo-1495903546524-cdb71d0aed7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbG9yZnVsJTIwdHJhdmVsfGVufDB8fDB8fHww"
          alt="image"
        />

        <div className="flex flex-row absolute bottom-0 w-full bg-sub text-white p-4">
          <div className="mr-auto text-left">
            <h6 className="text-xs font-bold">Splash Circle</h6>
          </div>
          <div className="text-right">
            <h6 className="text-xs font-bold">1:20:00</h6>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full p-4">
        <div className="mr-auto text-left">
          <h6 className="text-xs font-bold">Current bid</h6>
          <p className="text-sm font-bold">$10</p>
        </div>
        <div className="text-right">
          <h6 className="text-xs font-bold">#1-StarkLee</h6>
          <p className="text-sm">@Max Well</p>
        </div>
      </div>

      <div className="py-3 px-4 w-full">
        <button className="bg-primary-blue card-button w-full text-white font-bold py-2 px-4 rounded ">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default Card;
