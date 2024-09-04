import './App.css'
import { useState } from 'react';
import ProfileTabs from './components/ProfileTabs';
import ImageGallery from './components/ImageGallery';


function App() {
  return (
    <div className='flex w-full translate-y-1/2 px-4 lg:px-16'>
      <div className='w-1/2 hidden lg:block'></div>
      <div className='lg:w-1/2 flex flex-col'>
        <div><ProfileTabs /></div>
        <div className='w-11/12 my-5 divider h-1 rounded-sm mx-auto' />
        <div><ImageGallery /></div>
      </div>
    </div>
  )
}

export default App