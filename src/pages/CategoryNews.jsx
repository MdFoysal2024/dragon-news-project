import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {

  // const data = useLoaderData();
  //const { data } = useLoaderData();
  //console.log(data);
  // Distructure------>
  const { data: news } = useLoaderData();
  console.log(news);


  return (
    <div>


      <h3 className='text-left font-semibold mb-4'>Dragon News Home</h3>
      <p className='text-gray-400 text-sm text-left'>{news.length} News Found by Category</p>

{/* news Cart section */}
<div>
  {
    news.map(singleNews=><NewsCart
      key={singleNews._id}

    //  singleNews={singleNews} -----> newsData=singleNews
      newsData={singleNews} 
    ></NewsCart>)
  }
</div>

    </div>
  );
}

export default CategoryNews;
