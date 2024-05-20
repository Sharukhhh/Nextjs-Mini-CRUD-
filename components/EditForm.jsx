import React from 'react'

const EditForm = () => {
  return (
    <>
        <form className='flex flex-col gap-3'>
            <input type="text" placeholder='Enter Item name' name='title'
            className='border border-slate-800 px-8 py-2'
            />

            <input type="text" placeholder='Enter Item Description' name='title'
            className='border border-slate-800 px-8 py-2'
            />

            <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update</button>
        </form>
    </>
  )
}

export default EditForm