import React from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
function CartItems() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src="" alt="" />

        </div>

        <div className='ml-5 space-y-1'>
            <p className='font-bold'>Indian Dress</p>
            <p className='opacity-70'>Size L</p>
            <p className='opacity-70 mt-2'>Sellar: Rammu jii</p>
 
              <div className='flex space-x-5 items-center  text-gray-900 pt-6'>
                <p className='font-semibold'>₹199</p>
                <p className='opacity-50 line-through'>$211</p>
                <p className='text-green-500 font-semibold'>5% off</p>
              </div>
        </div>

        

      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
          <div className='flex items-center space-x-2'>
            <IconButton sx={{color:"green"}}>
               <AddIcon/>
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>3</span>
              <IconButton sx={{color:"red"}}>
                <RemoveOutlinedIcon/>
              </IconButton>
            
          </div>
          <div>
            <Button>Add</Button>
            <Button>Remove</Button>
          </div>

        </div>
    </div>
  )
}

export default CartItems
