import React from 'react'


function Nav() {
    return (
        <div className='w-full h-[100px] flex justify-between items-center px-20'>
            <h2 className='text-5xl font-bold'>LOGO.</h2>
            <ul className='flex gap-10 text-3xl'>
                <li><a href="">Services</a></li>
                <li><a href="">Our work</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Insights</a></li>
            </ul>
            <h4 className='text-3xl'>Contact us</h4>
        </div>
    )
}

export default Nav