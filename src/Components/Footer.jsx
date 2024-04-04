import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMusic2 } from "react-icons/lu";


function Footer() {
  return (
    <div className='text-black m-20 flex gap-20'>
        <div>
            <h1 className='text-xl font-semibold mb-5'>PRODUCT</h1>
            <h3>Templates</h3>
            <h3>Explore</h3>
            <h3>Features</h3>
            <h3>Website Builder</h3>
            <h3>Web Accessibility</h3>
            <h3>Velo</h3>
            <h3>Wix Playground</h3>
            <h3>My Sites</h3>
            <h3>Premium Plans</h3>
            <h3>Wix SEO</h3>
            <h3>Logo Maker</h3>
            <h3>Create a Blog</h3>
            <h3>Online Store</h3>
            <h3>Wix Bookings</h3>
            <h3>Restaurants</h3>
            <h3>App Market</h3>
            <h3>Domains</h3>
            <h3>Business Email</h3>
            
        </div>
        <div>
            <h1 className='text-xl font-semibold mb-5'>COMPANY</h1>
            <h3>About Wix</h3>
            <h3>Press Room</h3>
            <h3>Investor Relations</h3>
            <h3>Wix Jobs</h3>
            <h3>Design Assets</h3>
            <h3>Terms of Use</h3>
            <h3>App Market Terms</h3>
            <h3>Privacy Policy</h3>
            <h3>Privacy and Security Hub</h3>
            <h3>Accessibility Statement</h3>
            <h3>Abuse</h3>
            <h3>Affiliates</h3>
            <h3>Wix Capital</h3>
            <h3>Updates & Releases</h3>
            <h3>Contact Us</h3>
            <h3>Patent Notice</h3>
            <h3>Sitemap</h3>
            
        </div>

        <div>
            <h1 className='text-xl font-semibold mb-5'>COMMUNITY</h1>
            <h3>Wix Blog</h3>
            <h3>Wix Marketplace</h3>
            <h3>Student Website</h3>
            <h3>Wix Encyclopedia</h3>
            <h3>Partner Community</h3>
            
        </div>

        <div>
            <h1 className='text-xl font-semibold mb-5'>SUPPORT</h1>
            <h3>Support Center</h3>
            <h3>Getting Started Guide</h3>
            <h3>Wix Learn</h3>
            <h3>Status Page</h3>
        </div>

        <div>
            <h1 className='font-bold text-3xl mb-5'>WIX</h1>
            <p className=''>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools-enabling anyone to create and grow online</p>
            <p>© 2006-2022 Wix.com, Inc</p>
            <div className='flex flex-wrap gap-4 mt-4'>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaPinterestP />
            <FaInstagram />
            <FaLinkedinIn />
            <LuMusic2 />

            </div>
        </div>
    </div>
  )
}

export default Footer