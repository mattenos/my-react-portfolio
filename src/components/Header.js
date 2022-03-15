import React from 'react';

function Header() {
    return (
        <div class= 'text-white bg-gray-900 body-font'>
            <nav>
            <ul class= 'flex justify-end space-x-4 p-4 '>
                <li><a href="my-react-portfolio/#projects">Portfolio</a></li>
                <li><a href="my-react-portfolio/#about">About Me</a></li>
                <li><a href="my-react-portfolio/#contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/10rpgqFy0s0wwuDEXxLYe4Fqf1rCzCmNL/view?usp=sharing" download="Matt_Enos_Tech_Resume">Resume</a></li>
            </ul>
            </nav>
        </div>
    );
}

export default Header;
