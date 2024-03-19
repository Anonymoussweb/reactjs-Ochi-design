import React from 'react'
import { motion } from 'framer-motion';

function Marqee() {
    return (
        <div   className='flex text-[20vw] items-center rounded-t-3xl text-white w-full bg-[#004D43] whitespace-nowrap mt-10 py-[100px] uppercase font-bold leading-none tracking-tighter overflow-hidden'>
            <motion.h2 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="border-t-2 border-b-2 pb-12 border-white">WE ARE OCHI  WE ARE OCHI</motion.h2>
            <motion.h2 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15, repeat:Infinity}} className="border-t-2 border-b-2 pb-12 border-white"> &nbsp; WE ARE OCHI  WE ARE OCHI</motion.h2>
        </div>
    )
}

export default Marqee;