import React from 'react'

function Card() {
  return (
    <>
    <div className='mx-auto  text-center flex'>
    <div className=' text-purple-600 border-white p-5  bg-white border-2'>
        <h3>Website Plans</h3>
        <p>Great for showcasing a professional site</p>
    </div>
    
    <div className='p-5 text-blue-600 bg-blue-300 border-2'>
        <h3>Business and eCommerce Plans </h3>
        <p>Essential for accepting online payments</p>
    </div>
    </div>
    </>
  )
}

export default Card