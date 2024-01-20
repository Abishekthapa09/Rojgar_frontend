import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaAngleUp } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    { path: '/my-job', title: 'Jobs', hasDropdown: true },
    { path: '/about-us', title: 'About Us' },
    { path: '/contact-us', title: 'Contact Us' },
    { path: '/post-job', title: 'Post a Job' },
  ];

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-white sticky top-0 z-10'>
      <nav className='flex justify-between items-center py-2'>
        <a href="/">
          <img className='h-16' src="/Logo.png" alt="Logo" />
        </a>
        {/* nav items for a large devices */}
        <ul className='hidden md:flex gap-12'>
          {navItems.map(({ path, title, hasDropdown }) => (
            <li
              key={path}
              className={`text-tertiary relative ${hasDropdown ? 'group' : ''}`}
              onMouseEnter={hasDropdown ? handleDropdownToggler : undefined}
              onMouseLeave={hasDropdown ? closeDropdown : undefined}
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {/* {hasDropdown && (
                  <span className=' absolute ml-11 mt-1 hover:rotate-180'>
                    <FaAngleUp className="text-tertiary" />
                  </span>
                )} */}
                {title}
              </NavLink>
              {/* Dropdown */}
              {hasDropdown && isDropdownOpen && (
                <div className='absolute left-1/2 transform -translate-x-1/2 mt-4 flex flex-row p-6 bg-white rounded-md drop-shadow-lg'>
                  {/* Dropdown content */}
                  <div className='w-44 flex flex-col text-gray-600'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Jobs by location</p>
                    <Link to='/category1'>Jobs in Pokhara</Link>
                    <Link to='/category2'>Jobs in Kathmandu</Link>
                    <Link to='/category2'>Jobs in Butwal</Link>
                    <Link to='/category2'>Jobs in Chitwan</Link>
                  </div>
                  <div className='border-l border-gray-300 h-full mx-4'></div>
                  <div className='w-44 flex flex-col text-gray-600'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Popular categories</p>
                    <Link to='/category1'>IT Jobs</Link>
                    <Link to='/category2'>Engineering Jobs</Link>
                    <Link to='/category2'>Marketing Jobs</Link>
                    <Link to='/category2'>Sales Jobs</Link>
                  </div>
                  <div className='border-l border-gray-300 h-full mx-4'></div>
                  <div className='w-44 flex flex-col text-gray-600'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Explore more jobs</p>
                    <Link to='/category1'>Jobs by category</Link>
                    <Link to='/category2'>Jobs by skill</Link>
                    <Link to='/category2'>Jobs by location</Link>
                  </div>
                </div>


              )}
            </li>
          ))}
        </ul>
        {/* sign Up and Login Button */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to='/login' className='py-2 px-5 border rounded-md'>
            Log In
          </Link>
          <Link
            to='/sign-up'
            className='py-2 px-5 rounded-md bg-primary text-white'
          >
            Register
          </Link>
        </div>
        {/* mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className='w-5 h-5 text-primary' />
            ) : (
              <FaBarsStaggered className='w-5 h-5 text-primary' />
            )}
          </button>
        </div>
      </nav>
      {/* nav items for mobile */}
      <div
        className={`px-4 bg-tertiary py-5 rounded-sm ${isMenuOpen ? '' : 'hidden'
          } `}
      >
        {isMenuOpen && (
          <ul>
            {navItems.map(({ path, title, hasDropdown }) => (
              <li
                key={path}
                className={`text-base text-white first:text-white py-1 ${hasDropdown ? 'group' : ''
                  }`}
                onMouseEnter={hasDropdown ? handleDropdownToggler : undefined}
                onMouseLeave={hasDropdown ? closeDropdown : undefined}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className='text-white py-1 '>
              <Link to='/Login'>Login</Link>
            </li>
            <li className='text-white py-1 '>
              <Link to='/sign-up'>Register</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
