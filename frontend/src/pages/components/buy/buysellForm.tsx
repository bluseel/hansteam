import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Yup schema for form validation
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Phone number must be numeric').required('Phone number is required'),
  interestedIn: yup.string().oneOf(['Buying', 'Selling', 'Leasing', 'Agent']).required('Interest type is required'),
  propertyType: yup.string().oneOf(['Condominium', 'Single Family Residence', 'Town House', 'Investment Properties', 'Commercial', 'Land/Lot', 'Vacation Properties', 'Other']).required('Property type is required'),
  bedrooms: yup.number().min(0).max(6).required('Number of bedrooms is required'),
  bathrooms: yup.number().min(0).max(6).required('Number of bathrooms is required'),
  minPrice: yup.number().min(0, 'Minimum price must be at least 0').required('Minimum price is required'),
  maxPrice: yup.number().min(yup.ref('minPrice'), 'Maximum price must be greater than or equal to Minimum price').required('Maximum price is required'),
  message: yup.string()
});

const inputFieldStyling = 'h-8 px-1 block w-full border-gray-300 rounded-md shadow-sm text-[1rem]';
const inputLabelStyling = 'block font-medium text-white text-[1.2rem]';
const errorStyling = 'text-red-300 font-bold text-xs';

const LOCAL_STORAGE_KEY = 'realEstateFormData';

// Define the allowed keys for the form data
type AllowedKeys = "email" | "message" | "phone" | "firstName" | "lastName" | "interestedIn" | "propertyType" | "bedrooms" | "bathrooms" | "minPrice" | "maxPrice";

// Type guard to check if a key is an allowed key
const isAllowedKey = (key: string): key is AllowedKeys => {
  return [
    "email",
    "message",
    "phone",
    "firstName",
    "lastName",
    "interestedIn",
    "propertyType",
    "bedrooms",
    "bathrooms",
    "minPrice",
    "maxPrice"
  ].includes(key);
};

const RealEstateForm: React.FC = () => {
  const { control, handleSubmit, register, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const formValues = watch();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach(key => {
        // Ensure key is an allowed key before setting value
        if (isAllowedKey(key)) {
          setValue(key, parsedData[key]);
        }
      });
      setPriceRange([parsedData.minPrice || 0, parsedData.maxPrice || 2000000]);
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...formValues, minPrice: priceRange[0], maxPrice: priceRange[1] }));
  }, [formValues, priceRange]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onSliderChange = (value: [number, number]) => {
    setPriceRange(value);
    setValue('minPrice', value[0], { shouldValidate: true });
    setValue('maxPrice', value[1], { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black text-[1rem] p-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <label htmlFor="firstName" className={inputLabelStyling}>First Name:</label>
          <input {...register('firstName')} className={inputFieldStyling} />
          {errors.firstName && <p className={errorStyling}>{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className={inputLabelStyling}>Last Name:</label>
          <input {...register('lastName')} className={inputFieldStyling} />
          {errors.lastName && <p className={errorStyling}>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={inputLabelStyling}>Email Address:</label>
          <input {...register('email')} className={inputFieldStyling} />
          {errors.email && <p className={errorStyling}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={inputLabelStyling}>Phone:</label>
          <input {...register('phone')} className={inputFieldStyling} />
          {errors.phone && <p className={errorStyling}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="interestedIn" className={inputLabelStyling}>I am Interested in:</label>
          <select {...register('interestedIn')} className={inputFieldStyling}>
            <option value="">Select One</option>
            <option value="Buying">Buying</option>
            <option value="Selling">Selling</option>
            <option value="Leasing">Leasing</option>
            <option value="Agent">Agent</option>
          </select>
          {errors.interestedIn && <p className={errorStyling}>{errors.interestedIn.message}</p>}
        </div>

        <div>
          <label htmlFor="propertyType" className={inputLabelStyling}>Property Type:</label>
          <select {...register('propertyType')} className={inputFieldStyling}>
            <option value="">Select One</option>
            <option value="Condominium">Condominium</option>
            <option value="Single Family Residence">Single Family Residence</option>
            <option value="Town House">Town House</option>
            <option value="Investment Properties">Investment Properties</option>
            <option value="Commercial">Commercial</option>
            <option value="Land/Lot">Land/Lot</option>
            <option value="Vacation Properties">Vacation Properties</option>
            <option value="Other">Other</option>
          </select>
          {errors.propertyType && <p className={errorStyling}>{errors.propertyType.message}</p>}
        </div>

        <div>
          <label htmlFor="bedrooms" className={inputLabelStyling}>Bedrooms:</label>
          <select {...register('bedrooms')} className={inputFieldStyling}>
            <option value="">Any</option>
            {[...Array(7)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          {errors.bedrooms && <p className={errorStyling}>{errors.bedrooms.message}</p>}
        </div>

        <div>
          <label htmlFor="bathrooms" className={inputLabelStyling}>Bathrooms:</label>
          <select {...register('bathrooms')} className={inputFieldStyling}>
            <option value="">Any</option>
            {[...Array(7)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          {errors.bathrooms && <p className={errorStyling}>{errors.bathrooms.message}</p>}
        </div>

        <div>
          <label htmlFor="minPrice" className={inputLabelStyling}>Min Price:</label>
          <select {...register('minPrice')} className={inputFieldStyling}>
            <option value="0">No Min</option>
            {[...Array(40)].map((_, i) => {
              const price = i * 50000;
              return (
                <option key={i} value={price}>
                  ${price.toLocaleString()}
                </option>
              );
            })}
          </select>
          {errors.minPrice && <p className={errorStyling}>{errors.minPrice.message}</p>}
        </div>

        <div>
          <label htmlFor="maxPrice" className={inputLabelStyling}>Max Price:</label>
          <select {...register('maxPrice')} className={inputFieldStyling}>
            <option value="2000000">No Max</option>
            {[...Array(40)].map((_, i) => {
              const price = (i + 1) * 50000;
              return (
                <option key={i} value={price}>
                  ${price.toLocaleString()}
                </option>
              );
            })}
          </select>
          {errors.maxPrice && <p className={errorStyling}>{errors.maxPrice.message}</p>}
        </div>

        {errors.minPrice && <p className={errorStyling}>{errors.minPrice.message}</p>}
      </div>

      <div className="max-[600px]:col-span-2 col-span-4 place-content-start">
        <label htmlFor="message" className={inputLabelStyling}>Questions / Where Are You Looking?</label>
        <textarea {...register('message')} className='pl-1 h-28 mt-1 w-full border-gray-300 rounded-md shadow-sm' />
        {errors.message && <p className={errorStyling}>{errors.message.message}</p>}
      </div>

      <div className='flex flex-col items-center'>
        <button type="submit" className="-mt-4 w-full bg-primary-yellow text-black px-4 py-2 rounded-md shadow-sm font-bold">Submit</button>
        <div className='pl-2 text-white leading-normal'>
          Click reCAPTCHA of formsubmit.co after clicking this submit button
        </div>
      </div>
    </form>
  );
};

export default RealEstateForm;
