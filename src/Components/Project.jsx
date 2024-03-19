import React from 'react'
import { useEffect, useState } from 'react';

function Project() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;
            let delx = x - window.innerWidth / 2;
            let dely = y - window.innerHeight / 2;
            let angle = Math.atan2(dely, delx) * (180 / Math.PI);
            setRotate(angle - 180);

        })

    });
    return (
        <>
            <div className='bg-[#CDEA68] w-full h-[120vh] flex justify-center items-center relative pb-8'>
                <h2 className='text-center text-[12vw] font-bold leading-none tracking-tighter self-end'>READY <br />
                    TO START <br />
                    THE PROJECT ?</h2>
                <div className='w-full bg-cover flex justify-center items-center gap-20 absolute'>
                    <div className='w-[270px] h-[270px] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[150px] h-[150px] bg-black rounded-full flex justify-center items-center'>
                        <div style={{ transform: `rotate(${rotate}deg)`}} className=' w-[100%] h-[25px]'>
                        <div className='w-[25px] h-[25px] bg-white rounded-full'></div>
                    </div>
                        </div>
                    </div>
                    <div className='w-[270px] h-[270px] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[150px] h-[150px] bg-black rounded-full flex justify-center items-center'>
                        <div style={{ transform: `rotate(${rotate}deg)`}} className=' w-[100%] h-[25px]'>
                        <div className='w-[25px] h-[25px] bg-white rounded-full'></div>
                    </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center py-20 bg-[#CDEA68]'>
                <div>
                <a className='bg-black px-10 py-5 text-white  rounded-full text-[30px] flex justify-center items-center' href="">WE ALL CASE STUDIES<span className='bg-white ml-2 p-2 inline-block rounded-full'></span></a>
                <p className='text-center py-8 text-[2vw]'>OR</p>
                <a className='border-black border-2 px-10 py-5 text-black  rounded-full text-[30px] flex justify-center items-center' href="">HELLO@DESIGN.COM<span className='bg-black ml-2 p-2 inline-block rounded-full'></span></a>
                </div>
            </div>
        </>

    )
}

export default Project