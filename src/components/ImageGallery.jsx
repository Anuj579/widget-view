import React from 'react'
import qmarkIcon from '../assets/qmark.svg'
import boxesIcon from '../assets/boxes.svg'
import plusIcon from '../assets/plus.svg'

function ImageGallery() {
  return (
    <div className='bg-[#363C43] ps-8 pe-3 py-4 relative rounded-xl shadow-box '>
      <img src={qmarkIcon} alt="question-mark-icon" className='absolute top-4 left-3' />
      <img src={boxesIcon} alt="box-icon" className='absolute left-3 top-1/2' />
      <div className='mx-1'>
        <div>
          <div className='flex justify-between items-center mx-4 p-1 w-[92%]'>
            <h2 className='text-white font-medium bg-[#171717] px-9 py-4 rounded-2xl'>Gallery</h2>
            <div className='flex gap-2'>
              <button className='bg-[#FFFFFF08] text-xs font-medium text-white add-btn px-6 h-11 rounded-full'><div className='flex items-center gap-1'><img src={plusIcon} alt="plus-icon" className='mb' /><span>ADD IMAGE</span></div></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery