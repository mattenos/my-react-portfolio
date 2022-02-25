import React from 'react';

function Header() {
    return (
        <div class= 'bg-indigo-500 text-slate-50'>
            <nav>
            <ul class= 'flex justify-end space-x-4 p-4 '>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/resume">Resume</a></li>
            </ul>
            </nav>
        </div>
    );
}

export default Header;
