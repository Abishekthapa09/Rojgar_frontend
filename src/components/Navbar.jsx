import React, { useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaAngleUp } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Logout } from "../redux/userSlice";
import CustomButton from "./CustomButton";

function MenuList({ user, onClick }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
    window.location.replace("/");
  };

  return (
    <div>
      <Menu as='div' className='inline-block text-left'>
        <div className='flex'>
          <Menu.Button className='inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20 '>
            <div className='leading[80px] flex flex-col items-start'>
              <p className='text-sm font-semibold '>
                {user?.firstName ?? user?.name}
              </p>
              <span className='text-sm text-blue-600 '>
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <img
              src={user?.profileUrl}
              alt='user profile'
              className='w-10 h-10 rounded-full object-cover '
            />
            <BiChevronDown
              className='h-8 w-8 text-slate-600'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y dividfe-gray-100 rounded-md bg-white shadow-lg focus:outline-none '>
            <div className='p-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogout()}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {user} = useSelector((state) => state.user);

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
    { path: '/find-jobs', title: 'Jobs', hasDropdown: true },
    { path: '/about-us', title: 'About Us' },
    { path: '/contact-us', title: 'Contact Us' },
    { path: user?.accountType === "seeker" ?"/applications" : '/upload-job', title: user?.accountType === "seeker" ? "Applications" : 'Post a Job' },
  ];

  // <Link to={user?.accountType === "seeker" ?"/applications" : '/upload-job'}>{user?.accountType === "seeker" ? "Applications" : "Upload Job"}</Link>
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-white sticky top-0 z-20 drop-shadow-[0_4px_4px_rgba(0,0,0,0.02)]'>
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
                <div className='absolute left-1/2 transform -translate-x-1/2 mt-0.5 pt-8 flex flex-row p-6 bg-gray-50 rounded-md drop-shadow-lg'>
                  {/* Dropdown content */}
                  <div className='w-44 flex flex-col text-gray-500'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Jobs by location</p>
                    <Link to='/location/pokhara'>Jobs in Pokhara</Link>
                    <Link to='/location/kathmandu'>Jobs in Kathmandu</Link>
                    <Link to='/location/butwal'>Jobs in Butwal</Link>
                    <Link to='/location/chitwan'>Jobs in Chitwan</Link>
                  </div>
                  <div className=' border-l border-gray-400 h-36 mr-5'></div>
                  <div className='w-44 flex flex-col text-gray-500'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Popular categories</p>
                    <Link to='/category/it'>IT Jobs</Link>
                    <Link to='/category/engineer'>Engineering Jobs</Link>
                    <Link to='/category/marketing'>Marketing Jobs</Link>
                    <Link to='/category/sales'>Sales Jobs</Link>
                  </div>
                  <div className='border-l border-gray-400 h-36 mx-5'></div>
                  <div className='w-44 flex flex-col text-gray-500'>
                    <p className='font-extrabold text-Black text-lg pb-2'>Explore more jobs</p>
                    <Link to='/job/category'>Jobs by category</Link>
                    <Link to='/job/skill'>Jobs by skill</Link>
                    <Link to='/job/location'>Jobs by location</Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* sign Up and Login Button */}
        {/* <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to='/login' className='py-2 px-5 border rounded-md'>
            Log In
          </Link>
          <Link
            to='/sign-up'
            className='py-2 px-5 rounded-md bg-primary text-white'
          >
            Register
          </Link>
        </div> */}

        <div className='hidden lg:block'>
            {!user?.token ? (
              <Link to='/user-auth'>
                <CustomButton
                  title='Sign In'
                  containerStyles='text-primary py-1.5 px-5 focus:outline-none hover:bg-primary hover:text-white rounded-md text-base border border-primary'
                />
              </Link>
            ) : (
              <div>
                <MenuList user={user} />
              </div>
            )}
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
            {/* <li className='text-white py-1 '>
              <Link to='/login'>Login</Link>
            </li>
            <li className='text-white py-1 '>
              <Link to='/sign-up'>Register</Link>
            </li> */}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
