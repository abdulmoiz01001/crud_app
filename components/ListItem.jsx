import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import Link from 'next/link';

const getListItem = async ()=>{
    console.log("getTopic Enterd")
    try {  
        const res = await fetch('http://localhost:3000/api/topics', {

            cache:"no-store",
        });
        if(!res.ok){
            throw new Error("Failed to Fetch Data");
        }
        return res.json();
        
    } catch (error) {
        console.log("Error Loading topics :",error)
    }
};

const ListItem = async () => {
 
    const  {topics} = await getListItem();
  return ( <>
    {topics?.map((t)=>( <div className='flex justify-between items-center px-4 border border-slate-900 my-4'>
        <div>
          <h2>{t.title}</h2>
          <div>
           {t.description}
          </div>
        </div>
        <div className='flex gap-2'>
         <DeleteOutlineIcon />
        <Link href={`/edititem/${t._id}`} > <ModeEditOutlineTwoToneIcon/> </Link>
        </div>
    </div>))}
    </>
  )
};

export default ListItem;