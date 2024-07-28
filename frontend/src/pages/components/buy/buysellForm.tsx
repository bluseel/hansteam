import React, { useState } from 'react'

const BuysellForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    minPrice:0,
    maxPrice:0,
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    minPrice:0,
    maxPrice:0,
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interestedIn: '',
      propertyType: '',
      bedrooms: 0,
      bathrooms: 0,
      minPrice:0,
      maxPrice:0,
      message: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    setSubmitMessage('Confirm reCAPTCHA and return to original site');

    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
    if (contactForm) {
      contactForm.submit();
    }
  };


  return (
    <div>


      <form id="contactForm" action="https://formsubmit.co/b8751cb9eddb5801f13b5a4f026969fc" method="POST" onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="name">First Name</label>
          <input
            className='w-36 text-neutral-black'
            type="text"
            name="FirstName"
            placeholder='First Name'
            id="FirstName"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className={'errorClas'}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="LastName"
            placeholder='LastName'
            id="lastName"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className={'errorClas'}>{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder='Your Email'
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={'errorClas'}>{errors.email}</p>}
        </div>
        <div>
          <textarea
            placeholder='Your message'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <p className={'errorClas'}>{errors.message}</p>}
        </div>


        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default BuysellForm