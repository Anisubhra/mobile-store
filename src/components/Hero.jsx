import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why we are the best place
                        <br className="hidden lg:inline-block" />to buy Smartphone
                    </h1>
                    <p className="mb-8 leading-relaxed">You can choose a payment option that works for you, <br className="hidden lg:inline-block" />pay less with a trade‑in, connect your new Smartphone to your carrier and get set up quickly. <br className="hidden lg:inline-block" />You can also chat with a Specialist anytime..</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Buy</button>
                        <button className="ml-2 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none rounded-full text-lg items-center ">
                            <span className='bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent'>
                                Learn more
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/water_resistant__ddhg6jxs53yq_large.jpg" />
                </div>
            </div>
        </section>

    )
}

export default Hero