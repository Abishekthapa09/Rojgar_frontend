import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data);
      setIsLoading(false);
    })
  }, [])
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }
  //filter the jobs by title
  const filetrItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //This is a filter section
  const handleChange = (event) => {
    setselectedCategory(event.target.value)

  }


  //Button based filtering function
  const handleClick = (event) => {
    setselectedCategory(event.target.value)
  }

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };

  }
  //function for Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filetrItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  //function for Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const filterData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      // If there is a query, filter by job title
      filteredJobs = filteredJobs.filter((job) => {
        // Add null check for job and job.jobTitle
        return job.jobTitle && job.jobTitle.toLowerCase().includes(query.toLowerCase());
      });
    }

    // Category filtering section
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          minPrice,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        )
      );
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };


  // const filterData=(jobs,selected,query)=>{
  //     let filteredJobs=jobs;
  //     if(query){
  //         filteredJobs = filteredJobs.filter(
  //             (job) => job.jobTitle.toLowerCase().includes(query.toLowerCase())
  //           );
  //     }
  //     //Category filtering section
  //     if(selected){
  //         filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employementType,postingDate})=>(
  //             jobLocation.toLowerCase()===selected.toLowerCase()||
  //             parseInt(maxPrice)<=parseInt(selected)||
  //             salaryType.toLowerCase()===selected.toLowerCase()||
  //             employementType.toLowerCase()===selected.toLowerCase()
  //         ));
  //         console.log(filteredJobs);
  //     }
  //     return filteredJobs.map((data,i)=><Card key={i} data={data}/>)

  // }
  const result = filterData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* left Side  */}
        <div className='bg-white p-4 rounded '><Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job card section */}
        <div className='bg-white col-span-2 rounded-sm p-4'>
          {
            isLoading ? Banner(<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p>No Data Found</p>
            </>
          }
          {/* Pagination part */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filetrItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filetrItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }
        </div>


        {/* Light side  */}
        <div className='bg-white p-4 rounded '><Newsletter/></div>
      </div>
    </div>
  )
}

export default Home

