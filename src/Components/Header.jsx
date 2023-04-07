import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-5 justify-end text-lg mr-20 font-medium py-5'>
            <Link to="/">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;