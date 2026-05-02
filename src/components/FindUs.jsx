import React from 'react'
import { FaSquareFacebook, FaTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'

const FindUs = () => {
    return (
        <div className='text-left'>
            <h3 className=" font-semibold  text-2xl   py-6">Find US on</h3>

            <div className=" flex flex-col gap-2">
                <div className="join join-vertical">
                    <button className="btn join-item justify-start"><FaSquareFacebook className='text-blue-500 text-2xl' />Facebook</button>
                    <button className="btn join-item justify-start"><FaTwitter className='text-blue-500 text-2xl' />Twitter</button>
                    <button className="btn join-item justify-start"><GrInstagram className='text-red-500 text-2xl' />Instagram</button>
                </div>
            </div>
        </div>
    )
}

export default FindUs
