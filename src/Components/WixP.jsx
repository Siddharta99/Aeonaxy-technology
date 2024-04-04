import React from 'react'
import Card from './Card'

function WixP() {
  return (
    <>
    <div className='bg-blue-100'>
    <div className='text-center m-10 text-black '>
        <h1 className='text-black text-2xl mb-5 font-bold mx-auto'>Wix Premium Plans</h1>
        <p>Wix gives you 100s of templates, unlimited pages & top grade </p>
        <p>hosting FREE. Upgrade to Premium and get even more.</p>
        <button className='bg-blue-900 m-10 rounded-full text-white p-2'>Get Started Today</button>
    </div>
    <div className='text-center '>
    <div className="max-w-screen-xl mx-auto  py-5 flex gap-3  ">
            <Card width={"basis-1/3"} start={false} para={true} />
            {/* <Card width={"basis-2/3"} start={true} para={false} hover= "true"/> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default WixP