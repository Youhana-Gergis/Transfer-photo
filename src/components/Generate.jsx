import React from 'react'
import { DownloadSimple } from '@phosphor-icons/react'
const Generate = () => {
  return (
    <div className='fixed z-30 inset-x-0 bottom-0 w-full sm:container sm:bottom-10 sm:max-w-6xl m-auto p-5'>
      <div className='relative z-50 flex flex-col gap-3 bg-black/70 p-2 sm:px-[20px] sm:py-[15px] rounded-t sm:rounded '>
        <div className='border-b-2 border-black p-3 text-[#FFF] flex items-center justify-between'>
          <p className='text-[#868686]'>Create a new world by describing it. Sketch in guides if you like.</p>
          <button className='flex cursor-pointer place-items-center gap-2 border-none bg-transparent text-xs uppercase leading-[14px] outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-20 transition-all duration-500 text-[#02EE8B]'>
            Download
            <DownloadSimple size={20} />
          </button>
        </div>
        <div>
          <input type="text" placeholder='Dream Up your world' 
          className='
          text-[#FFF]
            disabled:cursor-not-allowed
            disabled:opacity-50
            px-2 pt-2 pb-0.5 
            bg-transparent 
            text-white-700 
            duration-200 
            rounded-t border-b border-b-black-500 outline-none hover:bg-black/40 focus-within:bg-black/40 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:ring-offset-2 focus:ring-offset-black h-8 max-h-8 w-full resize-none overflow-y-auto transition-all sm:h-10 sm:max-h-48 sm:overflow-y-hidden' />
        </div>
        <div>
          <button 
            className='relative 
            items-center 
            justify-center 
            text-sm 
            font-bold 
            transition-colors duration-200 rounded border-2 uppercase focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:ring-1 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500/50 border-transparent text-black h-9 px-4 sm:px-4 bg-green-500 hover:bg-green-600 focus:bg-green-600 whitespace-nowrap sm:w-[120px]'>
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Generate
