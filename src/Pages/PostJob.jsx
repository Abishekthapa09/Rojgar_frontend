import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from "react-select/creatable";



const PostJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch("http://localhost:3000/post-job"
            , {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => res.json()).then((result) => {
                console.log(result);
                if (result.acknowledge === true) {
                    alert("Job Posted Sucassfully!")
                }
                reset()
            });

    }

    const options = [
        { value: "Javascript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ]

    return (
        <div className='w-2xl container mx-auto xl:px-24 px-4'>
            {/* Form  */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* List Row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' /></div>

                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Company Name'
                                {...register("CompanyName")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' /></div>

                    </div>
                    {/* Second Row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder='Enter Minimun Salary'
                                {...register("minPrice")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>

                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Maximun Salary</label>
                            <input type="text" placeholder='Enter Maximum Salary'
                                {...register("maxPrice")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' /></div>

                    </div>

                    {/* third row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Job Location</label>
                            <input type="text" placeholder='Ex. New YOrk'
                                {...register("jobLocation")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                    </div>

                    {/* fourth row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Job Posting Date</label>
                            <input type="date" placeholder='Ex:2023-10-28'
                                {...register("postingDate")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your
                                    Experience</option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* 5th Row */}

                    <div>
                        <label className=' block mb-2 text-lg'>Required Skills Sets:</label>
                        < CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 py-4' />
                    </div>

                    {/* 6th Row */}

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Company Logo</label>
                            <input type="url" placeholder='Paste your company logo URL: https://weshare.com/img1'
                                {...register("companyLogo")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employment Type</label>
                            <select {...register("employmentType")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your
                                    Experience</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th Row */}

                    <div className=' w-full'>
                        <label className=' block mb-2 text-lg'>Job Description</label>
                        <textarea className=' w-full pl-3 py-1.5 focus:outline-none' rows={6} defaultValue={"This is a description section"} placeholder='Job Description' {...register("description")} />
                    </div>

                    {/* 8th Row */}

                    <div>
                        <label className=' block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder='your email'{...register("postedBy")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                    </div>


                    <input type="submit" className=' block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default PostJob
