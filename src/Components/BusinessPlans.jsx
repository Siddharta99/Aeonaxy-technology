import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function BusinessPlans() {
  return (
    <div>
    <div className='m-10 p-10 text-black bg-blue-100'>
        <h2 className='text-black text-xl font-bold '>Business & eCommerce plans</h2>
        <p className='mt-5'>Grow and manage your online business with a custom storefront, catalog and order management, </p>
        <p>shipping and taxes, integrated sales channels and more.</p>
        <button className='flex text-blue-500 mt-10'>See Business Plans<FaArrowRightLong className='mt-1 m-1' /></button>
    </div>
    <p className='text-black mx-10 text-sm'>Displayed prices are for yearly subscriptions, paid in full at the time of purchase. Prices do not include applicable taxes, which are determined according to your billing address.</p>
    <p className='text-black mx-10 text-sm'>The final price can be seen on the purchase page, before payment is completed.</p>
    </div>
  )
}

export default BusinessPlans