import React from 'react'
import { Link } from 'react-router-dom';
import BannerImg from '../assets/Banner.jpg';
import background from '../assets/background.jpg';
import pic from '../assets/Youhana.jpg';
import { DownloadSimple } from '@phosphor-icons/react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
const Dash = () => {
  return (
    <div className='bg-[#202020]'> 
      <img src={BannerImg} alt="" />
      <div className=' space-y-6 pb-24'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-12 -mt-16 px-5 max-sm:-my-2'>
          <div>
            <img src={pic} alt="" width={180} height={180} className=' aspect-square rounded-full'/>
          </div>
          <div className='flex flex-col md:gap-7'>
            <h1 className='max-w-[300px] font-bold leading-[60px] text-[#FFF] sm:max-w-full md:text-[52px] max-sm:text-[2.25rem]'>Youhana Gergis</h1>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3 md:mt-2'>
                  <h2 className='max-w-[200px] truncate text-base font-bold leading-9 sm:max-w-full md:text-2xl text-[#FFF]'>Youhana Gergis</h2>
                  <Link className='text-xs font-semibold text-green-500 underline underline-offset-4' to='/setting'>Edit profile</Link>
                </div>
                <div className='grid grid-cols-1 gap-x-16  text-xs text-black-600 sm:grid-cols-2 sm:text-sm'>
                  <div className='flex items-center gap-2 text-[#797979]'>
                    <CalendarMonthOutlinedIcon />
                    <span>Joined January 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-[20px]'>
          <span className='text-[#02EE8B] ml-4'>History</span>
          <hr className='w-[80px] border border-[#02EE8B] mt-1'/>
        </div>
        <section className='pt-2'>
            <div className=' w-full flex flex-wrap items-center justify-center gap-4 px-5'>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat group-hover:brightness-75 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat group-hover:brightness-75 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat group-hover:brightness-75 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat group-hover:brightness-75 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat group-hover:brightness-75 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-[400px] rounded-t-md bg-black-800 bg-cover bg-center bg-no-repeat hover:bg-black-700 transition-all duration-200 max-md:w-full'>
                  <img src={background} alt="" style={{height:200 ,borderRadius:"4px 4px 0 0"}} className=' max-md:w-full' />
                  <div className='flex flex-col bg-[#313131] p-2'>
                    <div>
                      <p className='text-[#FFF]'>Mountain</p>
                    </div>
                    <div className='flex items-center justify-between text-[#FFF] pt-4' >
                      <div className='text-[#b1b1b1]'>02/16/2024, 09:16:30 PM</div>
                      <div className='text-[#02EE8B] cursor-pointer'><DownloadSimple /></div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
      </div>
      
    </div>
  )
}

export default Dash
