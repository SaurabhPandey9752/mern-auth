// DarkModeToggle.js

export const toggleDarkMode = () => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  };
  
  export const toggleLightMode = () => {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  };
  