import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className=' bg-cyan-600 py-2'>
            <div className='container flex justify-between items-center h-16 w-5/6 mx-auto' >
                <div>
                    <h1 className='text-white text-4xl font-bold'>MEAL DB</h1>
                </div>
                <div>
                    <ul>
                        <Link className='text-white ml-12 font-bold uppercase' to='/'>Home</Link>
                        <Link className='text-white ml-12 font-bold uppercase' to='/Meal'>Meal</Link>
                        <Link className='text-white ml-12 font-bold uppercase' to='/Cart'>Cart</Link>
                        <Link className='text-white ml-12 font-bold uppercase' to='/Details'>Details</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;