import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for jobs</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum nobis amet. Magni dolorem eum tenetur cum perspiciatis perferendis saepe sit ipsum velit veniam, odio, aliquid voluptatum quidem? Porro, saepe.
                    Voluptates laudantium harum sed quasi.</p>

                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' placeholder='Abishek12@gamil.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
            {/* second part */}
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 items-center gap-2'>
                    <FaRocket />
                    Get noticed faster</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae mollitia sequi assumenda suscipit est dolore, odio reiciendis doloribus iure, cumque delectus illum, id laborum minus saepe harum perspiciatis.</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter