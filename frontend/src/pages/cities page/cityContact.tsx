import React from 'react';
// src/ContactForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
}
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Only numbers are allowed').required('Phone number is required')
});


const CityContact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    // handle form submission
  };


  const labelStyling = 'max-[600px]:text-xl block text-xl font-medium';
  const inputStyling = 'font-normal text-xl mt-1 block w-full px-3 py-1 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

  return (
    <div className="p-4 flex-1">
      <h2 className="max-[600px]:text-3xl text-2xl font-bold mb-2 text-primary-yellow">Lets Connect You With an agent</h2>
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
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-yellow text-black font-bold rounded-md hover:bg-primary-yellow/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default CityContact