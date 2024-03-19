import { transform } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';

function Eyes() {
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
        <div className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] w-full h-[100vh] bg-cover flex justify-center items-center gap-20'>
            <div className='w-[270px] h-[270px] bg-white rounded-full flex justify-center items-center'>
                <div className='w-[150px] h-[150px] bg-black rounded-full flex justify-center items-center'>
                    <div style={{ transform: `rotate(${rotate}deg)`}} className=' w-[100%] h-[25px]'>
                        <div className='w-[25px] h-[25px] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='w-[270px] h-[270px] bg-white rounded-full flex justify-center items-center'>
                <div className='w-[150px] h-[150px] bg-black rounded-full flex justify-center items-center'>
                    <div style={{ transform: `rotate(${rotate}deg)` }} className=' w-[100%] h-[25px]'>
                        <div className='w-[25px] h-[25px] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Eyes