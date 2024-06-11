import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/request-password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.message || 'Something went wrong!');
        return;
      }
      setMessage('Password reset email sent!');
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto dark:bg-gray-900 dark:text-white'>
      <h1 className='text-3xl text-center font-semibold my-7 text-slate-800 dark:text-white'>Forgot Password</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-gray-200 dark:bg-gray-800 p-5 rounded-lg'>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-slate-100 dark:bg-gray-700 p-3 rounded-lg text-slate-800 dark:text-white'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Send Email
        </button>
      </form>
      {message && <p className='text-green-700 dark:text-green-400 mt-5'>{message}</p>}
      {error && <p className='text-red-700 dark:text-red-400 mt-5'>{error}</p>}
      <div className='flex justify-between mt-5'>
        <Link to='/forgot-password'>
          <span className='text-blue-500'>Try another way</span>
        </Link>
      </div>
    </div>
  );
}
