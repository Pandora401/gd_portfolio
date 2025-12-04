import { useState, useEffect } from 'react';
import { HiSparkles, HiX } from 'react-icons/hi';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isGlassMode, setIsGlassMode] = useState(false);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'glass') {
            setIsGlassMode(true);
            document.body.classList.add('glass-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isGlassMode;
        setIsGlassMode(newMode);

        if (newMode) {
            document.body.classList.add('glass-theme');
            localStorage.setItem('theme', 'glass');
        } else {
            document.body.classList.remove('glass-theme');
            localStorage.setItem('theme', 'minimal');
        }
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isGlassMode ? 'Switch to Minimal' : 'Switch to Glass'}
        >
            {isGlassMode ? <HiX size={20} /> : <HiSparkles size={20} />}
        </button>
    );
};

export default ThemeToggle;
