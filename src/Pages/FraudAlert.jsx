import React from 'react'

const FraudAlert = () => {
  return (
    <main>
      <div className='flex flex-col items-center py-12'>
        <div className=' text-primary text-4xl font-bold'>Welcome to Rojgar.com Security Center</div>
        <div className='text-center text-tertiary pt-6'>We value the trust you place on rojgar.com and are commited to making your job dearch a safe and fraud-free experience on our site. However,in the wake of an increasing  <br />number of instances of fake job offers,we suggest you to be cautions of fraudulent emails and calls.</div>
      </div>
      <div className=' mx-28'>
        <ul className="timeline timeline-vertical">
        {/* <img src="/Logo.png" alt="" height={500} width={500}  className='absolute my-32' /> */}
          <li>
            <div className="timeline-start timeline-box bg-tertiary p-4 text-gray-200"> <h1 className='font-bold'>Asking for money </h1>
              <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est nisi aut eligendi numquam fugit quibusdam sed eos nihil necessitatibus tempore cum cupiditate libero consequuntur animi dolores, minus deleniti itaque.</p></div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box bg-tertiary p-4 text-gray-200"> <h1 className='font-bold'>Looking for confidential information</h1>
              <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est nisi aut eligendi numquam fugit quibusdam sed eos nihil necessitatibus tempore cum cupiditate libero consequuntur animi dolores, minus deleniti itaque.
              </p>
            </div>

            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box bg-tertiary p-4 text-gray-200"> <h1 className='font-bold'>Badly written job ads </h1>
              <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est nisi aut eligendi numquam fugit quibusdam sed eos nihil necessitatibus tempore cum cupiditate libero consequuntur animi dolores, minus deleniti itaque.
              </p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box bg-tertiary p-4 text-gray-200"> <h1 className='font-bold'>Offering easy hiring criteria </h1>
              <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est nisi aut eligendi numquam fugit quibusdam sed eos nihil necessitatibus tempore cum cupiditate libero consequuntur animi dolores, minus deleniti itaque.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box bg-tertiary p-4 text-gray-200"> <h1 className='font-bold'>Luring with salary beyond exceptaion</h1>
              <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est nisi aut eligendi numquam fugit quibusdam sed eos nihil necessitatibus tempore cum cupiditate libero consequuntur animi dolores, minus deleniti itaque.
              </p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default FraudAlert
