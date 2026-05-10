import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import RightNavber from '../components/LayoutComponent/RightNavber';

const NewsDetails = () => {


    //const data = useLoaderData();
    const data = useLoaderData();
    console.log(data);

    // loader data ---> data[0] --> data er [0] index er vitore news detailes ase.
    const news = data.data[0];
    console.log(news);

    const { author, title, details, thumbnail_url } = news || {}


    return (
        <div className='container mx-auto'>
            <Header></Header>

            <div className='grid grid-cols-1 md:grid-cols-12 py-12 justify-between text-center gap-12'>

                <section className="md:col-span-9  w-full">
                    <h2 className='text-left text-2xl font-semibold pb-6'>Dragon News Page</h2>

                    <div className='bg-gray-100 p-4 border border-gray-200 mb-6'>


                        <div
                            className=' text-2xl text-left py-4 font-semibold'

                        >

                            <h3>{author?.name}</h3>
                            <h3>{news.author?.name}</h3>
                            <h3>{data?.data[0]?.author?.name}</h3>
                        </div>


                        <div className="relative w-full h-76 overflow-hidden rounded-xl group">

                            {/* background blur image */}
                            <img
                                className="absolute w-full h-full object-cover blur-lg scale-110"
                                src={thumbnail_url}
                                alt=""
                            />

                            {/* main image */}
                            <img
                                className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                src={thumbnail_url}
                                alt="news"
                            />
                        </div>


                        <div
                            className=' text-2xl text-left py-4 font-semibold'

                        >
                            <h3>{title}</h3>
                            <h3>{data?.data[0]?.title}</h3>
                        </div>


                        <div>
                            <p
                                className="py-2 text-justify text-gray-400"
                            >
                                {details}......{" "}


                            </p>
                        </div>

                    </div>
                    <div className='flex'>
                        <Link

                            to={`/category/${news?.category_id}`}
                            className="btn bg-red-600 rounded-full text-white flex gap-2 "> <FaArrowLeft /> All News in this Category</Link>
                    </div>


                </section>



                <aside className="md:col-span-3  w-full">
                    <RightNavber></RightNavber>
                </aside>

            </div>










            
        </div>
    );
}

export default NewsDetails;
