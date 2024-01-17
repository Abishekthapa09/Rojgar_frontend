import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http:localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJobs(data))
    }, [])

    const handleApply= async()=>{
       
    }
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={"single Job page"} path={"single job"}/>
            <h2>JobDetails:{id}</h2>
            <h1>{job.jobTitle}</h1>
            <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
     </div>
     </>
    )
}

export default JobDetails
