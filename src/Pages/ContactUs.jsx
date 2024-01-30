import React from 'react'

const ContactUs = () => {
    return (
        <main >
            <div className="py-8 pb-32 px-4 mx-auto max-w-screen-md" >
                <h2 className="mb-4 text-4xl font-extrabold 
						text-center text-primary">
                    Contact Us
                </h2>
                <p className="mb-4 font-normal text-center 
						text-Black sm:text-xl">
                    Have a question or need assistance?
                    We're here to help! Please fill out the form below,
                    and our team will get back to you as soon as possible.
                </p>
                <form action="#" className=''>
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:w-1/2 pr-2 ">
                            <label htmlFor="firstName"
                                className="block my-2 text-left 
										text-md font-medium text-gray-900">
                                First Name
                            </label>
                            <input type="text"
                                className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-md block w-full p-2.5"
                                placeholder="Enter First Name"
                                required />
                        </div>
                        <div className="md:w-1/2 md:pl-2">
                            <label htmlFor="firstName"
                                className="block my-2 text-left text-md 
										font-medium text-gray-900">
                                Last Name
                            </label>
                            <input type="text"
                                className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-md block w-full p-2.5"
                                placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email"
                            className="block my-2 text-left text-md 
									font-medium text-gray-900">
                            Your email
                        </label>
                        <input type="email"
                            className="shadow-sm bg-gray-50 border 
									border-gray-300 text-gray-900 
									text-sm rounded-md block w-full p-2.5"
                            placeholder="email@example.com"
                            required />
                    </div>
                    <div>
                        <label htmlFor="subject"
                            className="block my-2 text-left 
									text-md font-medium text-gray-900">
                            Subject
                        </label>
                        <input type="text"
                            className="block p-3 w-full text-sm 
									text-gray-900 bg-gray-50 rounded-md 
									border border-gray-300 shadow-sm "
                            placeholder="What issue/suggestion do you have?"
                            required />
                    </div>
                    <div >
                        <label htmlFor="message"
                            className="block my-2 text-left 
									text-md font-medium text-gray-900 ">
                            Your message
                        </label>
                        <textarea rows="6"
                            className="block p-2.5 w-full text-sm 
										text-gray-900 bg-gray-50 rounded-md 
										shadow-sm border border-gray-300 "
                            placeholder="Enter your message here" />
                    </div>
                    <button type="submit"
                        className="mt-6 p-2 px-6 float-right text-white 
								rounded-md border-tertiary
								bg-primary hover:scale-105">
                        Send message
                    </button>
                </form>
            </div>
        </main>
    )
}
export default ContactUs
