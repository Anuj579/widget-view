import React, { useState, useEffect } from 'react';
import qmarkIcon from '../assets/qmark.svg';
import boxesIcon from '../assets/boxes.svg';
import plusIcon from '../assets/plus.svg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

function ImageGallery() {
  // Default images
  const defaultImages = [
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503332132010-d1b77a049ddd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  // State to hold images and the current index for the carousel
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Retrieve images from session storage or use default images on first load
  useEffect(() => {
    const storedImages = JSON.parse(sessionStorage.getItem('carouselImages'));
    if (storedImages && storedImages.length) {
      setImages(storedImages); // Use images from session storage if available
    } else {
      setImages(defaultImages); // Otherwise, use default images
    }
  }, []);

  // Store images in sessionStorage whenever they change
  useEffect(() => {
    if (images.length > 0) {
      sessionStorage.setItem('carouselImages', JSON.stringify(images));
    }
  }, [images]);

  const handleAddImage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target.result;
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    };
    fileInput.click();
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='bg-[#363C43] ps-8 pe-3 py-4 relative rounded-xl shadow-box '>
      <img src={qmarkIcon} alt="question-mark-icon" className='absolute top-4 left-3' />
      <img src={boxesIcon} alt="box-icon" className='absolute left-3 top-1/2' />
      <div className='mx-1'>
        <div>
          <div className='flex justify-between items-center mx-4 p-1 w-[92%]'>
            <h2 className='text-white font-medium bg-[#171717] px-9 py-4 rounded-2xl'>Gallery</h2>
            <div className='flex items-center gap-4'>
              <button className='bg-[#FFFFFF08] text-xs font-medium text-white add-btn px-6 h-11 rounded-full xl:me-5' onClick={handleAddImage}>
                <div className='flex items-center gap-1'>
                  <img src={plusIcon} alt="plus-icon" />
                  <span>ADD IMAGE</span>
                </div>
              </button>
              <button className='left-arrow arrow-btn h-11 w-11 rounded-full flex items-center justify-center' onClick={handlePrev}>
                <img src={leftArrow} alt="left-arrow-icon" className='arrow-icon' />
              </button>
              <button className='right-arrow arrow-btn h-11 w-11 rounded-full flex items-center justify-center' onClick={handleNext}>
                <img src={rightArrow} alt="right-arrow-icon" className='arrow-icon' />
              </button>
            </div>
          </div>
          <div className="slider-container grid grid-cols-3 gap-5 mx-4 mt-14 mb-3 w-[92%]">
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div key={index} className='carousel-item relative pb-[100%] '>
                <img src={image} alt={`carousel-${index}`} className='absolute top-0 left-0 w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-[1.05] hover:-rotate-2 carousel-img' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;