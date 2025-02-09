import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" }
];

function Order() {
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Order</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>

              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    id={option.value}
                    className="h-4 w-4 border-gray-500 text-indigo-500 focus:ring-indigo-400"
                  />
                  <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
              
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-2">
            {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
            </div>
         
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;