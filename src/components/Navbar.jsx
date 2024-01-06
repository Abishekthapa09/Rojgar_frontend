import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenueOpen,setIsMenueOpen]=useState(false);
    const handleMenueToggler=()=>{
        setIsMenueOpen(!isMenueOpen)
    };
    const navItems=[
        {path:"/",title:"Start a search"},
        {path:"/my-job",title:"My Jobs"},
        {path:"/salary",title:"Salary Estimated"},
        {path:"/post-job",title:"Post a Job"},
    ]
  return (
   <header className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <nav className='flex justify-between items-center py-6'>
        <a href="/"> <img className=' h-16' src="/public/Logo.png"></img></a>
        {/* nav items for a large devices */}
        <ul className='hidden md:flex gap-12'>
            {navItems.map(({path,title})=>(
                    <li key={path} className='text-base text-primary'>
                    <NavLink
                    to={path}
                    className={({ isActive}) =>isActive? "active":"" }
                  >
                    {title}
                  </NavLink>
                    </li>

                )) }
        </ul>
        {/* sign Up and Login Button */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to="/Login" className='py-2 px-5 border rounded'>Log In</Link>
            <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign Up</Link>
        </div>
    </nav>
   </header>
  );
};

export default Navbar;
