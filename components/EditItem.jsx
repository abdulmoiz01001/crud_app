'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const EditItem = ({ id , title , description }) => {
    const [ newTitle , setNewTitle ] = useState(title);
    const [ newDescription , setNewDescription ] = useState(description);
    const router = useRouter();
const UpdateHandler = async ()=>{
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
            method:"PUT",
            headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ newTitle, newDescription }),
        })
        if(!res.ok){
            throw new Error("Data is Not Updated");
        }
        router.refresh();
        router.push('/');
    } catch (error) {
        console.log(error)
    }
}

  return (
    <form onSubmit={UpdateHandler} className='flex flex-col gap-4 my-4 ' >
    <input
    value={newTitle}
    onChange={(e)=>{setNewTitle(e.currentTarget.value)}}
    className='border border-slate-900 px-2' type="text" placeholder='Title' />
    <input
    value={newDescription}
    onChange={(e)=>{setNewDescription(e.currentTarget.value)}}
    className='border border-slate-900 px-2' type="text" placeholder='Description' />
    <button type='submit' className='w-28 border border-slate-900 bg-slate-900 text-white' >EditItem</button>
   </form>
  )
}

export default EditItem