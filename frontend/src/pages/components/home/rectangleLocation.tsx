import React from 'react';
import { Link } from 'react-router-dom';


type RectangleProps = {
  city: string;
  imageUrl: string;
  imgHeight: string;
  link: string;
};

const Rectangle: React.FC<RectangleProps> = ({ city, imageUrl, imgHeight, link }) => {
  return (
    // <div className='max-[700px]:h-[19dvh] max-[700px]:flex-none w-full relative flex-[2] h-[65dvh] '>
    <Link to={link}>
      <div className=' w-full relative flex-[2]' style={{ height: imgHeight }}>

        <img src={imageUrl} alt="toronto city real estate"
          className='w-full h-full object-center object-cover' />
        <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
          <div className=' text-center w-full'>
            {city}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Rectangle;
