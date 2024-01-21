import React from "react"
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Banner = ({ query, handleInputChange }) => {
  const navigate = useNavigate(); // Access the navigate function

  const handleSearch = (e) => {
    e.preventDefault();
    // Add any additional search logic here if needed
    // Redirect to the search results page (replace '/search-results' with your actual route)
    navigate('/search-result');
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 md:py-20 px-8 py-14'>
      <h1 className=' text-4xl sm:text-5xl font-bold text-primary mb-3'>Find your <span className='text-primary'>dream job</span> now</h1>
      <p className=' text-md sm:text-lg text-black/70 mb-8 '>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

      <form onSubmit={handleSearch}>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex mr-0.5 md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary md:w-1/2 w-full'>
            <input type="text" name='title' id='title' placeholder='What position are you looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <div className='flex sm:rounded-s max-sm:rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary md:w-1/2 w-full'>
            <input type="text" name='title' id='title' placeholder='Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'  />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>

          <button type='submit' className='bg-primary py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
        </div>
      </form>
    </div>)
}

export default Banner