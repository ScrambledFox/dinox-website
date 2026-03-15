'use client';

import { useFormspark } from '@formspark/use-formspark';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import TextButton from '@/components/buttons/TextButton';

import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();

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
        setSubmitError(t('form_error'));
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} flex flex-col space-y-4 mt-4 text-left scheme-dark w-full`}
    >
      <h2 className='text-2xl font-header'>{t('form_section_booking')}</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_event_name')}
        {...register('eventName', { required: false })}
      />

      <input
        type='text'
        onFocus={(e) => (e.target.type = 'date')}
        className='bg-transparent p-2 border-b border-0 [&::-webkit-calendar-picker-indicator]:invert opacity-75 hover:opacity-100'
        placeholder={t('form_event_date')}
        {...register('eventDate', { required: t('form_event_date_required') })}
        onBlur={(e) => (e.target.type = 'text')}
      />
      {errors.eventDate && (
        <span className='text-red-500 text-sm'>{errors.eventDate.message}</span>
      )}

      <input
        type='text'
        onFocus={(e) => (e.target.type = 'time')}
        className='bg-transparent p-2 border-b border-0 [&::-webkit-calendar-picker-indicator]:invert opacity-75 hover:opacity-100'
        placeholder={t('form_event_time')}
        {...register('eventTime', { required: t('form_event_time_required') })}
        onBlur={(e) => (e.target.type = 'text')}
      />
      {errors.eventTime && (
        <span className='text-red-500 text-sm'>{errors.eventTime.message}</span>
      )}

      <hr className='py-2 border-none' />

      <h2 className='text-2xl font-header'>{t('form_section_your_info')}</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_company_name')}
        {...register('companyName', { required: t('form_company_name_required') })}
      />
      {errors.companyName && (
        <span className='text-red-500 text-sm'>
          {errors.companyName.message}
        </span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_first_name')}
        {...register('firstName', { required: t('form_first_name_required') })}
      />
      {errors.firstName && (
        <span className='text-red-500 text-sm'>{errors.firstName.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_last_name')}
        {...register('lastName', { required: false })}
      />

      <input
        type='email'
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_email')}
        {...register('email', { required: t('form_email_required') })}
      />
      {errors.email && (
        <span className='text-red-500 text-sm'>{errors.email.message}</span>
      )}

      <input
        type='tel'
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_phone')}
        {...register('phone', { required: t('form_phone_required') })}
      />
      {errors.phone && (
        <span className='text-red-500 text-sm'>{errors.phone.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_city')}
        {...register('promoterCity', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_country')}
        {...register('promoterCountry', { required: false })}
      />

      <hr className='py-2 border-none' />

      <h2 className='text-2xl font-header'>{t('form_section_event_info')}</h2>

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_venue_name')}
        {...register('venueName', { required: t('form_venue_name_required') })}
      />
      {errors.venueName && (
        <span className='text-red-500 text-sm'>{errors.venueName.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_street')}
        {...register('venueStreet', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_house_number')}
        {...register('venueHouseNumber', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_postal_code')}
        {...register('venuePostalCode', { required: false })}
      />

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_venue_city')}
        {...register('venueCity', { required: t('form_venue_city_required') })}
      />
      {errors.venueCity && (
        <span className='text-red-500 text-sm'>{errors.venueCity.message}</span>
      )}

      <input
        className='bg-transparent p-2 border-b border-0'
        placeholder={t('form_venue_country')}
        {...register('venueCountry', { required: t('form_venue_country_required') })}
      />
      {errors.venueCountry && (
        <span className='text-red-500 text-sm'>
          {errors.venueCountry.message}
        </span>
      )}

      <textarea
        className='bg-transparent p-2 border-b border-0 min-h-16 h-32 max-h-64'
        placeholder={t('form_extra_info')}
        {...register('extraInfo', { required: false })}
      />

      {submitted && (
        <span className='text-green-400 text-sm'>{t('form_success')}</span>
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
        {submitting ? t('form_submitting') : t('form_submit')}
      </TextButton>
    </form>
  );
}
