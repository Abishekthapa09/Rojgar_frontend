import React from 'react'
import { useForm } from 'react-hook-form'
import Salary from '../sidebar/Salary'

const PostJob = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='max-w-2xl container mx-auto xl:px-24 px-4'>
            {/* Form  */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/* List Row  */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='create-job-input' /></div>
                    
                       <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Company Name'
                                {...register("CompanyName")} className='create-job-input' /></div>
                    
                    </div>
                    {/* Second Row  */}
                    <div className='create-job flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder='Enter Minimun Salary'
                                {...register("minPrice")} className='create-job-input' /></div>
                    
                       <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Maximun Salary</label>
                            <input type="text" placeholder='Enter Maximum Salary'
                                {...register("maxPrice")} className='create-job-input' /></div>
                    
                    </div>

                    {/* third row  */}
                    <div className='create-job flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("SalaryType")} className='create-job-input'>
                                <option value="">Chose your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                           </div>
                    
                       <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Maximun Salary</label>
                            <input type="text" placeholder='Enter Maximum Salary'
                                {...register("maxPrice")} className='create-job-input' /></div>
                    
                    </div>



                    <input type="submit" className='my-5 ' />
                </form>
            </div>
        </div>
    )
}

export default PostJob
