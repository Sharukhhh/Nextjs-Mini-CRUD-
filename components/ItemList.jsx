import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import {HiPencilAlt , HiOutlineTrash} from 'react-icons/hi'

const getAllItems = async () => {
    try {
        
        const response = await axios.get('http://localhost:3000/api/Items' );

        if(response.data.items) {
            return response.data;
        };
    } catch (error) {
        console.log(error);
    }
}

const ItemList =  async () => {

    // const {items} = await getAllItems();

  return (
    <>
        {/* {items.length > 0 ? (
            items.map((item) => ( */}
        <div  className='p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Title</h2>
                <div>Description</div>
            </div>

            <div className='flex gap-2'>
                <button className='text-red-500 hover:scale-90'>
                    <HiOutlineTrash size={24}/>
                </button>
                <Link href={`/add`} >
                    <HiPencilAlt size={24} className='hover:scale-90'/>
                </Link>
            </div>
        </div>
            {/* ))
        ) : (
            <div className='p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start'>
                <p className='text-center text-2xl'>No Items to Show!</p>
            </div>
        )} */}
    </>
  )
}

export default ItemList