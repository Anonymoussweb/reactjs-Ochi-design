import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
function Hero() {
    return (
       <div>
            <div className='w-full h-[78vh] flex items-center'>
                <div className='w-full justify-center flex flex-col text-[8vw] font-bold leading-[7vw] tracking-tighter px-20'>
                    <h1>WE CREATE</h1>
                    <div className='flex items-center'>
                        <motion.div initial={{width:"0"}} animate={{width:"8vw"}} transition={{duration:1,delay:1,ease:[0.76, 0, 0.24, 1]}} className='w-[8vw] h-[6vw] bg-zinc-950 self-end rounded-xl bg-[url("https://images.unsplash.com/photo-1643503221866-512b8c495b32?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-center bg-cover'></motion.div>
                        <h1>EYE-OPENING</h1>
                    </div>
                    <h1>PRESENTATIONS</h1>
                </div>
            </div>
            <div className='w-full h-[80px flex justify-between items-center px-20 text-2xl'>
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <div className='flex'>
                    <button className='flex items-center border-black border-2 rounded-full p-2'>START THE PROJECT </button><span className='rounded-full border-2 rotate-[-45deg] border-black p-3 cursor-pointer'><FaArrowRightLong /></span>
                </div>
            </div>
        </div>
    )
}

export default Hero