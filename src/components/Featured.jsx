import React from 'react'

const Featured = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center uppercase bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">New
                </h1>
                <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_1_static__feiuc1zaeiaa_large.jpg" />
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Apple iPhone 13</h2>
                            <p className="leading-relaxed">Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://images.samsung.com/in/smartphones/galaxy-s22/images/galaxy-s22_highlights_kv_img.jpg" />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Galaxy S22｜S22+</h2>
                                    <p className="leading-relaxed">See Galaxy S22 and S22+ in AR.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://image01-in.oneplus.net/ebp/202206/28/1-M00-3B-EF-CpgM7mK6r4SAdLjbAAJOQHosXeY907.jpg" />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">OnePlus Nord 2T 5G</h2>
                                    <p className="leading-relaxed">Get Exchange bonus of ₹3000 on OnePlus devices.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Featured