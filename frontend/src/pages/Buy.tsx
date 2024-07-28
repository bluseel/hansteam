import React, { useState } from 'react'
import BuysellForm from './components/buy/buysellForm';

const Buy = () => {

  return (
    <div className='pt-28 h-[200dvh] bg-primary-blue text-neutral-white text-2xl max-[600px]:text-xl font-normal'>

      {/*written  */}
      <div className='p-2'>

        <div className='max-[600px]:text-3xl text-5xl font-bold'>
          Buy With Us
        </div>
        <div>
          Are buying a property for the first time or had bad experience before?
          <span className='text-primary-yellow italic font-bold text-4xl max-[600px]:text-3xl max-[600px]:text-nowrap'>Be rest assured</span>.<br />

          We at Hans Real Esate will be with you at every inch, to help you and assist you in buying the <span className='text-4xl max-[600px]:text-3xl max-[600px]:text-nowrap text-primary-yellow italic font-bold'>perfect property</span> for you and your family
        </div>

        <div>
          <br />
          Things to consider before buying new property:
          <ul className='text-[1rem] leading-tight'>
            <li>• asdfkj</li>
            <li>• Meow</li>
            <li>• Meow</li>
            <li>• Meow</li>
          </ul>
        </div>
      </div>

      {/* form */}
      <div>

        <div className='max-[600px]:text-3xl text-5xl font-bold text-justify'>
          Send us requirements
        </div>

          <BuysellForm/>
      </div>

    </div>
  )
}

export default Buy