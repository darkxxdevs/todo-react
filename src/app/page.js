"use client"
import React from 'react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';

const page = () => {

  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const handleClick = () => {
    setMainTask([...mainTask, { task, desc }])
    setdesc(" ")
    settask(" ")
  }

  let renderTask = <h2 className='text-black text-2xl'>No task available</h2>

  const deleteTask = (i) => {
    let cpArry = [...mainTask]
    cpArry.splice(i, 1)
    setMainTask(cpArry)
  }




  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {

      return <li key={i} className='w-96'>
        <div className='text-white flex justify-between mb-5 items-center'>
          <h6>{i + 1}.</h6>
          <h3 className='text-2xl font-normal'>{t.task}</h3>
          <h5 className='text-xl text-[#ddd]'>{t.desc}</h5>
          <button
            onClick={(i) => {
              deleteTask(i);
            }}
            className='bg-black text-white outline-none px-5 py-3  font-bold rounded-md'>< FaTrash /></button>
        </div>
      </li>

    })
  }




  return (
    <>
      <div className='navbar bg-[#2E3440] text-white text-center text-5xl mb-7 '>
        DARKXX TODO LIST
      </div>
      <div className="create-task flex  gap-10 px-4 items-center content-center py-4 border-4 h-45  text-black mx-5">
        <input type="text "
          className='px-2 py-3 outline-none'
          placeholder='Create a task'
          value={task}
          onChange={(e) => {
            settask(e.target.value)
          }}
        />
        <input type="text "
          className='px-2 py-3 outline-none'
          placeholder='add description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button onClick={handleClick} className='bg-[#3B4252] outline-none text-white px-5 py-3 rounded-md absolute right-10 font-bold'> Add Task</button>


      </div>
      <div className="taskContainer w-screen h-45 border-red-300">
        <div className="taskList w-496 flex justify-between py-5 bg-[#3B4252]  mt-8 mx-7 rounded-md p-5">
          <ul>{renderTask}</ul>
        </div>

      </div>

    </>
  )
}

export default page