import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-slate-200 ${darkMode ? 'dark:bg-slate-800' : 'dark:bg-white'}`}>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-slate-800 dark:text-white'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='text-slate-800 dark:text-white'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-slate-800 dark:text-white'>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li className='text-slate-800 dark:text-white'>Sign In</li>
            )}
          </Link>
        </ul>
        <button onClick={handleToggle} className='bg-slate-700 text-white p-2 rounded-lg md:p-3 lg:p-4'>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}
