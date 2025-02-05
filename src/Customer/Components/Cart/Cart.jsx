import React from 'react';
import CartItems from './CartItems';
import { Button } from '@mui/material';

function Cart() {
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative py-5">
      {/* Cart Items Section */}
      <div className="col-span-2">
         {[1,1,1,1].map((item)=><CartItems />)}
      </div>

      {/* Price Details Section */}
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border rounded-lg  shadow-md bg-white p-4">
          <p className="uppercase font-bold text-gray-600 pb-4 border-b">Price Details</p>
          <div className="space-y-4 font-semibold text-lg py-3 mb-6">
            <div className="flex justify-between text-black">
              <span>Price:</span>
              <span>₹49,999</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span className="text-green-500">5%</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge:</span>
              <span className="text-green-500">₹49</span>
            </div>
            <hr />
            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount:</span>
              <span className="text-green-500">₹2,458</span>
            </div>
          </div>
          <Button variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
}
 export default Cart;
