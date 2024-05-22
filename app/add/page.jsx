'use client';
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import { showErrorAlert, showSuccessAlert } from '@/utils/alertUtils';

const page = () => {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [disabled , setDisabled] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setDisabled((prev) => !prev);

      if(!title || !description) {
        showErrorAlert('Oops...!' , 'Fill all the fields!');
        return;
      }
  
      if(title.trim() === '' || description.trim('') === '') {
        showErrorAlert('Oops...!' , 'Invalid!');
        return;
      }

      const response = await fetch('http://localhost:3000/api/items' , {
        method: 'POST',
        headers : {
          'Content-type': 'application/json'
        },
        body : JSON.stringify({title , description})
      });

      if(response.ok) {
        showSuccessAlert('Saved' , 'Item Saved Successfully');
        router.push('/');
      }
    } catch (error) {
      showErrorAlert('Error' , 'An Error occured while saving');

    } finally {
      setDisabled((prev) => !prev);
      setDescription('')
      setTitle('')
    }
  }


  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input type="text" placeholder='Enter Item name' name='title'
            value={title} onChange={(e) => setTitle(e.target.value)}
            className='border border-slate-800 px-8 py-2'
            />

            <input type="text" placeholder='Enter Item Description' name='description'
            value={description} onChange={(e) => setDescription(e.target.value)}
            className='border border-slate-800 px-8 py-2'
            />

            <button disabled={disabled}
            type='submit' className={`font-bold text-white py-3 px-6 w-fit ${
              disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:scale-110'
            }`}>
              Save
            </button>
        </form>
    </>
  )
}

export default page