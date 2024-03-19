import React from 'react'

function Footer() {
    return (
        <div className='w-full h-screen flex px-10'>
            <div className='w-1/2 flex justify-between flex-col'>
                <p className='text-[8vw] leading-none font-bold tracking-[-10px]'>EYE-
                    OPENING</p>
                <p className='text-[2vw] font-medium'>LOGO</p>
            </div>
            <div className='w-1/2'>
                <p className='text-[7vw] leading-none tracking-[-10px] font-bold'>PRESENTATIONS</p>
                <div className='flex justify-between'>
                    <div className='flex items-center text-[2] w-[80vh] text-[30px] pl-3'>
                        S: <br />
                        Instagram <br />
                        Behance <br />
                        Facebook <br />
                        Linkedin
                        <br /><br />
                        L: <br /> 
                        212-1111 W 4 Ave <br />
                        Vancouver, Canada <br />
                        <br />
                        11 Chukarina St <br />
                        Lviv, Ukraine
                        <br /><br />
                        E: <br />
                        hello@designs.com

                    </div>
                    <div className='flex h-[80vh] items-center text-[30px]'>
                        M: <br />

                        Home <br />
                        Services <br />
                        Our work <br />
                        About us <br />
                        Insights <br />
                        Contact us <br />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer