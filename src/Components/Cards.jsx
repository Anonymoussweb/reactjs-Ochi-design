import React from 'react'

function Cards() {
    return (
        <>
            <div className='pt-32'>
                <p className='text-[4vw] border-b-2 border-black pl-20 pb-9'>Featured projects</p>
                <div className='flex gap-5 mt-20'>
                    <div className='w-1/2 pl-20 relative'>
                        <p className='text-[2vw] mb-4'>FYDE</p>
                        <div>
                            <div className=''>
                                <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                            </div>
                        </div>
                        <span className='absolute top-1/2 right-0 -translate-y-[50%] text-[5vw]  text-[#CDEA68]'>FYDE</span>
                    </div>
                    <div className='w-1/2 pr-20 relative'>
                        <p className='text-[2vw] mb-4'>VISE</p>
                        <div>
                            <div className='bg-[url("")]'>
                                <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                            </div>
                        </div>
                        
                        <span className='absolute top-1/2 left-0 -translate-y-[50%] text-[5vw] text-[#CDEA68]'>VISE</span>
                    </div>
                </div>
             
            </div>
            <div className='flex justify-center my-20'>
                <a className='bg-black px-10 py-5 text-white  rounded-full text-[30px] flex justify-center items-center' href="">WE ALL CASE STUDIES<span className='bg-white ml-2 p-2 inline-block rounded-full'></span></a>
            </div>
        </>
    )
}

export default Cards