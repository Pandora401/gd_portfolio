import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
