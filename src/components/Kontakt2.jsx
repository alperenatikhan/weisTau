import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(register);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register('First name', { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register('Mobile number', {
          required: true,
          minLength: 6,
          maxLength: 12,
          pattern: /0-9/i,
        })}
      />
      <input
        type="text"
        placeholder="Address"
        {...register('Address', { required: true })}
      />
      <input
        type="number"
        placeholder="PLZ"
        {...register('PLZ', {
          required: true,
          minLength: 5,
          maxLength: 5,
          pattern: /0-9/i,
        })}
      />

      <input type="submit" />
    </form>
  );
}
