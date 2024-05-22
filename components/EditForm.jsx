'use client';
import { showErrorAlert, showSuccessAlert } from '@/utils/alertUtils';
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'

const EditForm = ({id , title , description}) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription , setNewDescription] = useState(description);
  const [disabled , setDisabled] = useState(false);
  const router = useRouter(); 

  const handleUpdate = async (e) => {
    e.preventDefault();
    setDisabled((prev) => !prev);

    if(!newTitle || !newDescription) {
      showErrorAlert('Error' , 'Fill all the fields');
    }

    if(newTitle.trim() === '' || newDescription.trim() === '') {
      showErrorAlert('Error' , 'Invalid');
    }

    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT'
      });

      if(response.ok) {
        showSuccessAlert('Updated' , 'Item Updated Successfully');
        router.push('/');
      }
    } catch (error) {
      showErrorAlert('Error' , 'Error while updating the data');
    } finally {
      setDisabled((prev) => !prev);
    }
  }

  return (
    <>
        <form onSubmit={handleUpdate} className='flex flex-col gap-3'>
            <input type="text" placeholder='Enter Item name' name='title'
            value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
            className='border border-slate-800 px-8 py-2'
            />

            <input type="text" placeholder='Enter Item Description' name='description'
            value={newDescription} onChange={(e) => setNewDescription(e.target.value)}
            className='border border-slate-800 px-8 py-2'
            />

            <button disabled={disabled} className={`font-bold text-white py-3 px-6 w-fit ${
              disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:scale-110'
            }`}>
              Update
            </button>
        </form>
    </>
  )
}

export default EditForm