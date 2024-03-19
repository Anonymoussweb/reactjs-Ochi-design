import React from 'react'

function Approach() {
    return (
        <div className='flex justify-between h-[80vh] bg-[#CDEA68] pt-[80px] px-[80px]'>
            <div>
                <p className='text-[3vw]'>Our approach</p>
                <div className='bg-black w-[200px] flex items-center text-white py-5 px-10 rounded-full'>
                    <p>READ MORE </p>
                    <p className='w-[15px] h-[15px] ml-3 bg-white rounded-full'></p>
                </div>
            </div>
            <div>
                <img className='w-[800px] rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    )
}

export default Approach