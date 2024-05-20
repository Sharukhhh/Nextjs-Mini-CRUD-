'use client';

import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [disabled , setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setDisabled((prev) => !prev);

      if(!title || !description) {
        return alert('Fill the fields');
      }
  
      if(title.trim() === '' || description.trim('') === '') {
        return alert('Invalid');
      }

      const response = await axios.post('http://localhost:3000/api/items' , {title , description});
      if(response.data.message) {
        return alert('Item saved');
      }
    } catch (error) {
      console.log('error while submitting', error);
      alert("Error occured", error);

    } finally {
      setDisabled((prev) => !prev);
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
            type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit hover:scale-110'>
              Save
            </button>
        </form>
    </>
  )
}

export default page