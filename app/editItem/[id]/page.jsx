import EditForm from '@/components/EditForm'
import { showErrorAlert } from '@/utils/alertUtils'
import React from 'react'


const getSingleItem = async (id) => {
  try {
    const response = await fetch (`http://localhost:3000/api/items/${id}` , {
      cache: 'no-store',
      method: 'GET'
    })

    if(response.ok) {
      return await  response.json()
    }

  } catch (error) {
    showErrorAlert('Error' , 'Error while fetching item');
  }
}

const page = async ({params}) => {

  const {id} = params;

  const {item} = await getSingleItem(id);

  const {title , description} = item;

  return (
    <EditForm
    id={id}
    title={title}
    description={description}
    />
  )
}

export default page