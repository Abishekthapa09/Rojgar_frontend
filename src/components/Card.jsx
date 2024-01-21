import React from 'react'
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi"

const Card = ({ data }) => {
    const {_id, companyName, companyLogo, jobTitle, minPrice, maxPrice, SalaryType, jobLocation, employmentType, postingDate, description } = data;
    return (
        <section className='card'>
            <Link to={`/job/${_id}`} className='flex gap-4 sm:flex-col items-start'>
                <img src={companyLogo} alt="" className='rounded-xl' height={96} width={96} />
                <div>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

                    <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin />{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock />{employmentType}</span>
                        <span className='flex items-center gap-2'>Rs {minPrice}-{maxPrice}k</span>
                        <span className='flex items-center gap-2'><FiCalendar />{postingDate}</span>

                    </div>
                    <p className='text-base text-primary/60 '>{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card
