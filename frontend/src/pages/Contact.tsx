// src/ContactForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  query: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Only numbers are allowed').required('Phone number is required'),
  query: yup.string().required('Question or Query is required'),
});

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    // handle form submission
  };


  const labelStyling = 'block text-2xl font-medium';
  const inputStyling = 'text-xl mt-1 block w-full px-3 py-2 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

  return (
    <div className=' pt-28 bg-primary-blue text-neutral-white text-2xl max-[600px]:text-xl font-normal'>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <h2 className="max-[600px]:text-4xl text-5xl font-bold mb-4">Lets have a Talk</h2>
            <p className='font-bold text-3xl'>Address:</p>
            <p>Lorem ipsum dolor sit amet consectetur. Mattisonrare s velit at tortor nibh lectus.</p>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Mattisonrare s velit at tortor nibh lectus.</p>
            <p className="mt-4 font-bold text-3xl">Phone:</p>
            <p>0-100-HANS</p>
            <p>0-100-HANS</p>
            <p className="mt-4 font-bold text-3xl">EMAIL:</p>
            <p>contact.hans-team@gmail.com</p>

            <div className="flex w-full mt-8 gap-1 max-[600px]:justify-center">

              <a href="https://wa.me/14166024267?text=Hi%20there,%20I%20am%20interested%20in%20a%20FREE%20Instant%20Online%20Home%20Evaluation%20by%20The%20Hans%20Team!%20Homelife's%20Number%201%20Real%20Estate%20Team%20In%20The%20GTA%20And%20Ontario%20For%2010%20Years%20In%20A%20Row!%20" target='_blank' className="text-white">
                <div className='w-20 h-20'>
                  <img src="/socialMedia/whatsapp.svg" className='w-full h-full' alt="" />
                </div>
              </a>

              <a href="https://m.facebook.com/HansTeamRealEstate" target='_blank' className="text-white">
                <div className='w-20 h-20'>
                  <img src="/socialMedia/fb.svg" className='w-full h-full' alt="" />
                </div>
              </a>

              <a href="https://www.instagram.com/hansteamrealestate/" target='_blank' className="text-white">
                <div className='w-20 h-20'>
                  <img src="/socialMedia/instagram.svg" className='w-full h-full' alt="" />
                </div>
              </a>

              <a href="https://www.youtube.com/@HansTeamYT" target='_blank' className="text-white">
                <div className='w-20 h-20'>
                  <img src="/socialMedia/youtube.svg" className='w-full h-full' alt="" />
                </div>
              </a>


            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="max-[600px]:text-4xl text-5xl font-bold mb-4">Message Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className={labelStyling}>Name</label>
                <input
                  type="text"
                  {...register('name')}
                  className={inputStyling} />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className={inputStyling}
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Phone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className={inputStyling}
                />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Question or Query</label>
                <textarea
                  {...register('query')}
                  className="text-[0.9rem] leading-none h-32 mt-1 block w-full px-3 py-2 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-red-500 text-sm">{errors.query?.message}</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary-yellow text-black font-bold rounded-md hover:bg-primary-yellow/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
