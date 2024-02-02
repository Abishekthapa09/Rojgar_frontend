import React from 'react'

const FraudAlert = () => {
  return (
    <main>   <div className='flex flex-col items-center py-12'>
      <div className=' text-primary text-5xl font-bold'>
        Welcome to Rojgar.com Security Center
      </div>
       {/* <img src="/Logo.png" alt="" height={500} width={500}  className='absolute my-32' /> */}
      <div className='text-center text-tertiary pt-6'>We value the trust you place on rojgar.com and are commited to making your job dearch a safe and fraud-free experience on our site. However,in the wake of an increasing  <br />number of instances of fake job offers,we suggest you to be cautions of fraudulent emails and calls.</div>
    </div>
      <div className=' pb-12'>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-middle timeline-box bg-gradient-to-r from-tertiary to-gray-900   p-4 text-gray-200 px-12">
            <div className='bg-Gray text-tertiary rounded-xl font-extrabold font-sans text-xl py-4 text-center md:py-4 mb-8 md:text-3xl'>5 Signs to identify fake job offers</div>
              <h1 className='font-bold md:text-2xl text-md '>Asking for money.</h1>
              <p className='text-gray-300 pl-1 md:text-md text-sm md:pb-6 pb-4'>Real jobs don't ask for money. If they do, it's likely a scam. Be cautious and avoid paying for job opportunities.</p>
              <h1 className='font-bold md:text-2xl text-md'>Looking for confidential information.</h1>
              <p className='text-gray-300 pl-1 md:text-md text-sm md:pb-6 pb-4'>Legitimate jobs won't seek confidential info upfront. Stay safe; avoid sharing personal details with suspicious job alerts.</p>

              <h1 className='font-bold md:text-2xl text-md'>Badly written job ads.</h1>
              <p className='text-gray-300 pl-1 md:text-md text-sm md:pb-6 pb-4'>Watch out for poorly written job ads—they may signal unprofessionalism or scams. Look for clear details and avoid vague or unrealistic listings.</p>

              <h1 className='font-bold md:text-2xl text-md'>Offering easy hiring criteria. </h1>
              <p className='text-gray-300 pl-1 md:text-md text-sm md:pb-6 pb-4'>
                Beware of job ads with too-easy hiring criteria. Legitimate jobs have realistic requirements, so be cautious of anything that seems too good to be true.</p>

              <h1 className='font-bold md:text-2xl text-md'>Luring with salary beyond exceptaion.</h1>
              <p className='text-gray-300 pl-1 md:text-md text-sm md:pb-6 pb-4'>Be wary of job offers with exceptionally high salaries; they could be misleading or part of a scam.</p>


            </div>
          </li>
          {/* <li>
          <div className="timeline-end timeline-box bg-tertiary p-4 text-gray-200 ">
              <h1 className='font-bold text-xl'>Asking for money.</h1>
              <p className='text-gray-300 pl-2 text-sm pb-4'>Real jobs don't ask for money. If they do, it's likely a scam. Be cautious and avoid paying for job opportunities.</p>
              <h1 className='font-bold text-xl'>Looking for confidential information.</h1>
              <p className='text-gray-300 pl-2 text-sm pb-4'>Legitimate jobs won't seek confidential info upfront. Stay safe; avoid sharing personal details with suspicious job alerts.</p>

              <h1 className='font-bold text-xl'>Badly written job ads.</h1>
              <p className='text-gray-300 pl-2 text-sm pb-4'>Watch out for poorly written job ads—they may signal unprofessionalism or scams. Look for clear details and avoid vague or unrealistic listings.</p>

              <h1 className='font-bold text-xl'>Offering easy hiring criteria. </h1>
              <p className='text-gray-300 pl-2 text-sm pb-4'>
                Beware of job ads with too-easy hiring criteria. Legitimate jobs have realistic requirements, so be cautious of anything that seems too good to be true.</p>

              <h1 className='font-bold text-xl'>Luring with salary beyond exceptaion.</h1>
              <p className='text-gray-300 pl-2 text-sm pb-4'>Be wary of job offers with exceptionally high salaries; they could be misleading or part of a scam.</p>


            </div>
          </li> */}
        </ul>
      </div>
    </main>

  )
}

export default FraudAlert
