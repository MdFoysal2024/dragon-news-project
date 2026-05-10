
import { useState } from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaRegEye } from "react-icons/fa";


import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const NewsCart = ({ newsData }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='bg-gray-100 p-4 border border-gray-200 mb-6'>

            <div className='flex items-center justify-between p-4 bg-slate-200 '>

                <div className=' flex gap-4 items-center'>
                    <img className='w-12 rounded-full' src={newsData.author.img} alt="img loading..." />


                    <div className=' text-left '>
                        <p className='font-semibold'>{newsData.author.name}</p>
                        <p className='text-sm text-gray-400'>{newsData.author.published_date}</p>
                    </div>

                </div>

                <div className='flex text-2xl gap-4'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>



            {/* <div className="w-full h-84 overflow-hidden ">
                <img
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                    src={newsData.thumbnail_url}
                    alt="news"
                />
                
            </div> */}

            <div
                className=' text-2xl text-left py-4 font-semibold'

            >
                <h3>{newsData.title}</h3>
            </div>

            <div className="relative w-full h-76 overflow-hidden rounded-xl group">

                {/* background blur image */}
                <img
                    className="absolute w-full h-full object-cover blur-lg scale-110"
                    src={newsData.thumbnail_url}
                    alt=""
                />

                {/* main image */}
                <img
                    className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    src={newsData.thumbnail_url}
                    alt="news"
                />
            </div>




            <div>
                <p
                    className={`py-2 text-justify text-gray-400 ${isExpanded ? "" : "line-clamp-3"
                        }`}
                >
                    {newsData.details}
                </p>

                <div className='flex py-1'>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-500 font-medium cursor-pointer"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>

            <div>
                <p
                    className="py-2 text-justify text-gray-400"
                >
                    {newsData.details.slice(0, 200)}......{" "}

                    <Link to={`/news/${newsData._id}`} className=' text-blue-500 font-semibold'>Read More</Link>
                </p>
            </div>

            <div className='flex justify-between py-4'>

                <div className='flex items-center gap-3'>
                    <p>{newsData.rating.number}</p>

                    <Rating
                        style={{ maxWidth: 150 }}
                        value={newsData.rating.number}
                        readOnly
                    />

                </div>

                <div className='flex items-center gap-3'>
                    <p>{newsData.total_view
                    }</p>
                    <FaRegEye />
                </div>
            </div>





        </div>
    );
}

export default NewsCart;
