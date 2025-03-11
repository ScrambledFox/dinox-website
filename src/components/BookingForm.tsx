'use client';

import { useFormspark } from '@formspark/use-formspark';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import TextButton from '@/components/buttons/TextButton';

interface BookingFormProps {
  className?: string;
}

type FormInputs = {
  eventName: string;
  eventDate: Date;
  eventTime: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  promoterCity: string;
  promoterCountry: string;
  venueName: string;
  venueStreet: string;
  venueHouseNumber: string;
  venuePostalCode: string;
  venueCity: string;
  venueCountry: string;
  extraInfo: string;
};

export default function BookingForm({ className }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [submit, submitting] = useFormspark({
    formId: 'Zwt4r99h5',
  });

  const onSubmit = async (data: FormInputs) => {
    await submit(data)
      .then(() => {
        setSubmitted(true);
        setSubmitError(null);
      })
      .catch(() => {
        setSubmitError('An error occurred. Please try again later.');
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} flex flex-col space-y-4 mt-4 text-left scheme-dark w-full`}
    >
      <h2 className='text-2xl'>Booking</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Event Name'
        {...register('eventName', { required: false })}
      />

      <input
        type='text'
        onFocus={(e) => (e.target.type = 'date')}
        className='bg-transparent p-2 border-b border-0 [&::-webkit-calendar-picker-indicator]:invert opacity-75 hover:opacity-100'
        placeholder='Event Date*'
        {...register('eventDate', { required: 'Event Date is required' })}
        onBlur={(e) => (e.target.type = 'text')}
      />
      {errors.eventDate && (
        <span className='text-red-500 text-sm'>{errors.eventDate.message}</span>
      )}

      <input
        type='text'
        onFocus={(e) => (e.target.type = 'time')}
        className='bg-transparent p-2 border-b border-0 [&::-webkit-calendar-picker-indicator]:invert opacity-75 hover:opacity-100'
        placeholder='Event Time*'
        {...register('eventTime', { required: 'Event Time is required' })}
        onBlur={(e) => (e.target.type = 'text')}
      />
      {errors.eventTime && (
        <span className='text-red-500 text-sm'>{errors.eventTime.message}</span>
      )}

      <hr className='py-2 border-none' />

      <h2 className='text-2xl'>Your Information</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Company Name*'
        {...register('companyName', { required: 'Company Name is required' })}
      />
      {errors.companyName && (
        <span className='text-red-500 text-sm'>
          {errors.companyName.message}
        </span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='First Name*'
        {...register('firstName', { required: 'First Name is required' })}
      />
      {errors.firstName && (
        <span className='text-red-500 text-sm'>{errors.firstName.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Last Name'
        {...register('lastName', { required: false })}
      />

      <input
        type='email'
        className='bg-transparent p-2 border-b border-0'
        placeholder='Email*'
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && (
        <span className='text-red-500 text-sm'>{errors.email.message}</span>
      )}

      <input
        type='tel'
        className='bg-transparent p-2 border-b border-0'
        placeholder='Phone*'
        {...register('phone', { required: 'Phone is required' })}
      />
      {errors.phone && (
        <span className='text-red-500 text-sm'>{errors.phone.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='City'
        {...register('promoterCity', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Country'
        {...register('promoterCountry', { required: false })}
      />

      <hr className='py-2 border-none' />

      <h2 className='text-2xl'>Event Information</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Venue Name*'
        {...register('venueName', { required: 'Venue Name is required' })}
      />
      {errors.venueName && (
        <span className='text-red-500 text-sm'>{errors.venueName.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Street'
        {...register('venueStreet', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='House Number'
        {...register('venueHouseNumber', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Postal Code'
        {...register('venuePostalCode', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Venue City*'
        {...register('venueCity', { required: 'Venue City is required' })}
      />
      {errors.venueCity && (
        <span className='text-red-500 text-sm'>{errors.venueCity.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder='Venue Country*'
        {...register('venueCountry', { required: 'Venue Country is required' })}
      />
      {errors.venueCountry && (
        <span className='text-red-500 text-sm'>
          {errors.venueCountry.message}
        </span>
      )}

      <textarea
        className='bg-transparent p-2 border-b border-0 min-h-16 h-32 max-h-64'
        placeholder='Optional extra information about the event'
        {...register('extraInfo', { required: false })}
      />

      {submitted && (
        <span className='text-green-400 text-sm'>
          Your booking request has been sent! We will get back to you whenever
          we can.
        </span>
      )}

      {submitError && (
        <span className='text-red-500 text-sm'>{submitError}</span>
      )}

      <TextButton
        type='submit'
        variant='primary'
        className='text-black bg-white p-4 rounded-lg'
        disabled={submitting || submitted}
      >
        {submitting ? 'Submitting...' : 'Request Booking'}
      </TextButton>
    </form>
  );
}
