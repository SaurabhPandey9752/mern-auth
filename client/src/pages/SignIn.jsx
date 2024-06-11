import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto dark:bg-gray-900 dark:text-white'>
      <h1 className='text-3xl text-center font-semibold my-7 text-slate-800 dark:text-white'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-gray-200 dark:bg-gray-800 p-5 rounded-lg'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 dark:bg-gray-700 p-3 rounded-lg text-slate-800 dark:text-white'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 dark:bg-gray-700 p-3 rounded-lg text-slate-800 dark:text-white'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-slate-800 dark:text-slate-300'>Don't Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <div className='flex justify-between mt-5'>
        <Link to='/forgot-password'>
          <span className='text-blue-500'>Forgot password?</span>
        </Link>
      </div>
      <p className='text-red-700 dark:text-red-400 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}
