
import moment from 'moment'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';

const Header = () => {

    const [time, setTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment());
        }, 1000); // প্রতি ১ সেকেন্ডে আপডেট

        return () => clearInterval(interval); // cleanup
    }, []);


    return (
        <div className=' mt-12 flex  flex-col justify-center items-center gap-2'>
            <img src={logo} alt=""  className='py-6'/>
            <p className='text-gray-400 '>Journalism Without Fear or Favour</p>
            <p className='font-poppins '>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

            <p>{time.format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

        </div>
    )
}

export default Header
