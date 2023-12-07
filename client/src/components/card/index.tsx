// components/Card.tsx
import React, { FunctionComponent } from 'react';
import './card.scss';

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg bg-card">
     <div className="relative ">
          <img
            className="w-full h-auto object-cover object-center  card-img"
            src="https://images.unsplash.com/photo-1495903546524-cdb71d0aed7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbG9yZnVsJTIwdHJhdmVsfGVufDB8fDB8fHww"
            alt="image"
          />

          <div className="flex absolute bottom-0 w-full  bg-sub text-white">
          <div className="w-1/2 p-4 ">
          <h6 className="text-xs font-bold">Splash Circle</h6>
         


          </div>
          <div className="w-1/2 p-4 text-right">
          <h6 className="text-xs font-bold">1:20:00</h6>

          </div>
            
          </div>
     </div>

        <div className="flex ">
          <div className="w-1/2 p-4 text-left">
          <h6 className="text-xs font-bold">Current bid</h6>
            <p className="text-sm font-bold">$10</p>


          </div>
          <div className="w-1/2 p-4 text-right">
          <h6 className="text-xs font-bold">#1-StarkLee</h6>
            <p className="text-sm">@Max Well</p>

          </div>

          
        </div>

      <div className='py-3 px-4 '>
          <button className="bg-card-button w-full text-white font-bold py-2 px-4 rounded ">
            Place Bid
          </button>
        
      </div>
      </div>
    </div>
  );
};

export default Card;
