"use client"

import  React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
 const [title,settitle] =useState("")
 const [desc,setdesc] =useState("")
 const [mainTask,setMainTask] =useState([])
 
 const notify=()=>{
  toast("Task added")
 }

 const deleted=()=>{
  toast("Task deleted")
 }

 const submitHandler= (a)=>{
  a.preventDefault()
  setMainTask([...mainTask,{title,desc}])
 }
 
 const deleteHandler=(i)=>{
  let copytask=[...mainTask]
  copytask.splice(i,1)
  setMainTask(copytask)
 }

 let renderTask= <h2>No Task Available</h2>

 if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between w-2/3'> 
          <h5x className='text-2xl font-semibold'>{t.title}</h5x>
          <h6 className='text-2xl font-semibold'>{t.desc}</h6>
        </div>
        <button 
        onClick={
          ()=>{
            deleteHandler(i)
          }
          
        }
         className='bg-red-400 text-white px-4 py-2 rounded fond-bold '>Delete</button>
        <ToastContainer/>
      </li>
    );
   })
 }
 
  return (
    <>
    <h1 className='bg-black text-white 
    p-5 text-5xl font-bold text-center'>Shree's ToDoList
    </h1>

    <form onSubmit={submitHandler}>
      <input type="text"
      className='text-2xl border-zinc-500 border-4 m-8 px-4 py-2'
      placeholder='Enter your Title here' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />  
      <input type="text"
      className='text-2xl border-zinc-500 border-4 m-8 px-4 py-2'
      placeholder='Enter your Description here' 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button onClick={notify} className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      <ToastContainer/>
    </form>
    <hr />
    <div className='p-8 bg-slate-400'>
       <ul>
        {renderTask}
       </ul> 
    </div> 
    
    
    </>
    
  )
}

export default page
