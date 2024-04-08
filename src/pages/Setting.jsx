import React from 'react'
import pic from '../assets/Youhana.jpg';
import BannerImg from '../assets/Banner.jpg';
import AddIcon from '@mui/icons-material/Add';
const Setting = () => {
  return (
    <div className='bg-[#202020]'>
      <div className='h-full px-20 max-md:px-10 max-sm:px-5 py-[70px]'>
        <form>
            <div className='flex flex-col place-content-center gap-8'>
                <div className='flex w-full items-center justify-between'>
                    <h1 className='text-4xl text-[#FFFFFF] font-medium sm:text-5xl sm:font-bold'>Setting</h1>
                    <button type='button' className='relative inline-flex items-center justify-center text-sm font-bold transition-colors duration-200 rounded border-2 uppercase focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:ring-1 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500/50 border-transparent text-black h-9 px-4 sm:px-4 bg-green-500 hover:bg-green-600 focus:bg-green-600'>Save</button>
                </div>
                <div className='flex w-full flex-col gap-4 sm:flex-row md:gap-8 lg:gap-12'>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'>Profile Image</label>
                        <img src={pic} alt="" width={180} height={180} style={{borderRadius:"50%"}} />
                        <div className='relative flex items-center gap-1 text-xl text-green-500 justify-center cursor-pointer'>
                            <AddIcon />
                            Upload Photo
                            <input type='file' className='w-[100px] h-full cursor-pointer absolute opacity-0'></input>
                        </div>
                    </fieldset>
                    <div className='grid w-full grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-8'>
                        <fieldset className='flex flex-col gap-2'>
                            <label className='text-sm text-[#FFFFFF] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Name</label>
                            <input type="text" className=' text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50 flex h-10 w-full rounded-md ring-offset-background px-3 py-2 text-sm border border-white bg-black file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2'>
                            <label className='text-sm text-[#FFFFFF] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>UserName</label>
                            <input type="text" className='text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50 flex h-10 w-full rounded-md ring-offset-background px-3 py-2 text-sm border border-white bg-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-700 focus-visible:ring-offset-black' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2 sm:col-span-2'>
                            <label className='text-sm text-[#FFFFFF] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Email</label>
                            <input type="text" className='text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50 flex h-10 w-full rounded-md ring-offset-background px-3 py-2 text-sm border border-white bg-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-700 focus-visible:ring-offset-black' />                        
                        </fieldset>
                    </div>
                </div>
                <hr className='w-full border border-black-600' />
                <div className='flex flex-col gap-4'>
                    <span className='text-[#FFF] text-xl font-bold'>Bacground AI</span>
                    <div className=' relative w-full pb-[20.8333%]'>
                        <div className='relative max-h-64 rounded-md bg-black-800 ' style={{position:"absolute",inset:0}}>
                            <img src={BannerImg} alt="" style={{width:"100%", height:"100%", position:"absolute",inset:0}} />
                        </div>
                    </div>
                    <div className='relative flex items-center gap-1 text-xl text-green-500 cursor-pointer'>
                        <AddIcon />
                        Upload Photo
                        <input type='file' className='w-[130px] h-full cursor-pointer absolute opacity-0 ml-2'></input>
                    </div>
                </div>
                <hr className='w-full border border-black-600' />
                <div className='mt-4'>
                    <span className='inline-flex items-center gap-1 cursor-pointer text-sm font-medium text-red-500 underline underline-offset-4 transition-all duration-150 hover:text-red-400'>Delete Account</span>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Setting
