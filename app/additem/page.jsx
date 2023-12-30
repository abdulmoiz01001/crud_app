'use client'
import { useRouter } from 'next/navigation';
import React, { useState  } from 'react'
const page = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const router = useRouter();

    const addHandler = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and Description Both are required");
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            })

            if(res.ok){
                router.refresh();
              router.push('/');
            }else{
              throw new Error("Failed To Create a Topic");
            }
        } catch (error) {
           console.log(error)
        }
    };

    return (
        <form onSubmit={addHandler} className='flex flex-col gap-4 my-4 ' >
            <input
                value={title}
                onChange={(e) => { setTitle(e.currentTarget.value) }}
                className='border border-slate-900 px-2' type="text" placeholder='Title' />
            <input
                value={description}
                onChange={(e) => { setDescription(e.currentTarget.value) }}
                className='border border-slate-900 px-2' type="text" placeholder='Description' />
            <button type='submit' className='w-28 border border-slate-900 bg-slate-900 text-white' >AddItem</button>
        </form>
    )
}

export default page