import React from 'react'
import { search } from '../assets'

const Searchmenu = () => (
<section className='absolute bg-white w-full h-auto top-10 left-0 fade-up '>
  <div className='flex items-start flex-col gap-10 px-[250px] py-[30px]'>
      <div className='flex'>
        <img src={search} alt="searchbutton" className=' w-[20px] h-[20px] mt-[14px]' />
        <input 
            type="search" 
            placeholder='search apple.com' 
            className=' outline-none font-SF-Pro font-bold bg-white text-[28px] px-[20px] w-[800px] h-[50px] rounded-full' />
      </div>
      <div className='flex flex-col'>
          <h1 className=' text-gray-500 text-[12px]'>Quick Links</h1>
          <a href='#'><h1 className=' text-[14px]'> - Find a Store</h1></a>
          <a href='#'><h1 className=' text-[14px]'> - Apple Vision Pro</h1></a>
          <a href='#'><h1 className=' text-[14px]'> - AirPods</h1></a>
          <a href='#'><h1 className=' text-[14px]'> - Air Tag</h1></a>
          <a href='#'><h1 className=' text-[14px]'> - Apple Trade In</h1></a>
      </div>

  </div>
</section>
)

export default Searchmenu