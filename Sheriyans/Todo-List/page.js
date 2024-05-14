"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
  };

 const deleteHandler = (i)=>{
  let copytask = [...mainTask];
  copytask.splice(i,1);
  setmainTask(copytask)
 }

  let rendertask = <h2>No Task Available</h2>

  if(mainTask.length>0){
  rendertask = mainTask.map((t,i)=>{
    return(
      <li className='flex items-center justify-between'>
        <div className='flex mb-5  w-2/3'>
          <h5 className='text-2xl font-semibold font-serif'>{t.title}</h5>
          <p className='text-lg font-serif ms-8'>{t.desc}</p>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i);
        }}
        className='bg-red-500 text-white font-bold p-2' >Delete</button>
      </li>
    );
  });}
  return (
    <>
    <h1 className='bg-black text-white py-5 text-3xl text-center font-bold font-mono' >
      Lokesh's Todo-List</h1>

      <div className='my-10 mx-20'>
       <form onSubmit={submitHandler} >
        <label className='text-xl font-bold font-mono my-3 mx-3'>Task</label>
        <input 
        placeholder='Enter your Title'
        className='rounded-md border-4 border-current p-1'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <label className='text-xl font-bold font-mono my-3 mx-5'>Description</label>
         <input 
        placeholder='Enter your Description'
        className='rounded-md border-4 border-current p-1'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        />
        <button className='bg-black text-white font-bold font-sans mx-3 py-2 px-2' >Add Task</button>
         </form>
        </div>
      <hr/>

      <div className='p-8 bg-slate-200'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default page
