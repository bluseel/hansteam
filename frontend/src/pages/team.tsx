import React from 'react'
import { teamData } from './teamsData'

const Team = () => {

  return (
    <div className='leading-none pt-28 bg-primary-blue text-neutral-white text-2xl max-[600px]:text-xl font-normal'>
      <div className='flex flex-col gap-2 p-4'>

        <div className='max-[600px]:text-3xl text-5xl font-bold'>
          Hans Team of Experts
        </div>
        <div className='max-[600px]:text-2xl leading-7'>
          You don’t need an agent you need a team of qualified, trustable, and experienced people.
          Lorem ipsum dolor sit amet consectetur. Et at ornare nec tincidunt arcu. Et enim tellus ultrices semper augue venenatis feugiat morbi ac. Id orci eu justo amet vel porttitor. Aliquam lectus urna sed magnis pharetra scelerisque sit ante.
        </div>
      </div>


      <div className='max-[600px]:flex-col max-[600px]:gap-10   flex gap-[2dvw] py-8 flex-wrap place-content-center'>

        {teamData.map((employee) => (
          <div className=' w-64 flex flex-col bg-primary-yellow text-neutral-black rounded-xl'>

            <div className=' h-60 object-cover'>
              <img className='w-full h-full rounded-xl rounded-b-none' src="/employee.jpg" alt="" />
            </div>

            <div className='p-2 flex flex-col gap-2'>

              <div className='text-2xl font-extrabold leading-none '>
                {employee.name}
              </div>

              <div className='flex flex-col gap-1'>

                <div className='text-[0.9rem] flex items-center'>
                  <img src="/briefcase.svg" className='w-5 mr-2' alt="" /> {employee.occupation}
                </div>
                <div className='text-[0.9rem] flex items-center'>
                  <img src="/phone.svg" className='w-5 mr-2' alt="" /> {employee.phoneNumber}
                </div>
                <div className='text-[0.8rem] flex items-center text-wrap leading-none'>
                  <img src="/mail.svg" className='w-5 mr-2' alt="" /> {employee.email}
                </div>
              </div>
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Team