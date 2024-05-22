'use client';
import Link from 'next/link'
import React from 'react'
import {HiPencilAlt , HiOutlineTrash} from 'react-icons/hi'
import {useRouter} from 'next/navigation'
import { showConsentAlert, showErrorAlert, showSuccessAlert } from '@/utils/alertUtils';
import { ApiError } from 'next/dist/server/api-utils';

const getAllItems = async () => {
    try {
        
        const response = await fetch ('http://localhost:3000/api/items' , {
            cache: 'no-store',
            method : 'GET'
        } );

        if(response.ok) {
            return await response.json()
        };
    } catch (error) {
        console.log(error);
    }
}

const ItemList =  async () => {

    const router = useRouter();
    const {items} = await getAllItems();

    const removeItem = async (id) => {

        const result = await showConsentAlert('Are you sure?' , '')

        if(result.isConfirmed) {
            try {
                const response = await fetch (`http://localhost:3000/api/items?id=${id}` , {
                    method: 'DELETE'
                });

                if(response.ok) {
                    showSuccessAlert('Removed' , 'Item Successfully Removed')
                    router.refresh();
                }

            } catch (error) {
                console.log(error)
                showErrorAlert('Error' , 'Error while deleting!')
            }
        }
    }

  return (
    <>
        {items.length > 0 ? (
            items?.map((item) => (
        <div key={item?._id} className='p-4 border border-slate-500 my-4 flex justify-between gap-6 items-start hover:scale-105'>
            <div>
                <h2 className='font-bold text-2xl'>{item?.title}</h2>
                <div>{item?.description}</div>
            </div>

            <div className='flex gap-2'>
                <button onClick={() => removeItem(item?._id)} className='text-red-500 hover:scale-90'>
                    <HiOutlineTrash  size={24}/>
                </button>
                <Link href={`/editItem/${item?._id}`} >
                    <HiPencilAlt size={24} className='hover:scale-90'/>
                </Link>
            </div>
        </div>
        ))
        ) : (
            <div className='p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start'>
                <p className='text-center text-2xl'>No Items to Show!</p>
            </div>
        )}
    </>
  )
}

export default ItemList