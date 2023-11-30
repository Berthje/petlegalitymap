import React from 'react'

const Sidebar = () => {
  return (
    <header className='max-w-[20rem] h-screen bg-[#16294a]'>
      <div className='bg-[#1c3259] h-[3.5rem] flex justify-center items-center'>
        <h2 className='text-[1.5rem] text-white tracking-wider uppercase font-chakra'>PETLEGALITYMAP</h2>
      </div>
      <div className='flex flex-col gap-y-4 px-4 py-6'>
        <div className='flex justify-between'>
          <h3 className='text-white'>ANIMALS</h3>
          <div className='flex gap-x-3'>
            <p className='text-gray-400'><span className='text-cyan-400'>100</span>/1873</p>
            <button className='bg-cyan-400 px-3 text-white text-[0.875rem] rounded-md'>RESET</button>
          </div>
        </div>
        <input type="text" name="" id="" placeholder='Search animal' className='bg-[#0e1d38] text-white px-4 py-2 rounded-md focus:bg-[#264170] focus:outline-none focus:border-2 focus:border-cyan-400 placeholder:text-gray-400'/>
      </div>
    </header>
  )
}

export default Sidebar
