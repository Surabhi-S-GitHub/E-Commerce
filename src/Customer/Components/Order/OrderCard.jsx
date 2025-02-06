import React from 'react'
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
function OrderCard() {
  const navigate=useNavigate()

  return (
    <div onClick={() => navigate(`/account/order/${5}`)}
    className='p-5 shadow-lg hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}} >
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className='opacity-60 text-xs font-bold'>Men slim dress</p>
                    <p className='opacity-60 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-60 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
            {true &&  <div>
                <p>
                  <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm' />
                  <span>
                     Delivered on Feb 6
                  </span>
                </p>
                <p className='text-xs'>
                    Your item has been delivered
                </p>
            </div> 
            }
            {false && <p>
                <span>
                    Expected Delivery on Feb 6
                </span>
            </p>
            }

        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
