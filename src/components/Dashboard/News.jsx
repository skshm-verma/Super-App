import React, { useEffect, useState } from 'react'
import './Dashboard.css'

const News = () => {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    useEffect(() => {
        const fetchNews = async () => {
          setIsLoading(true); // Set loading state to true
          setError(null); // Clear potential errors
          try {
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_4339544e36cda2318a44f5b6dc34fcccb9b0c&q=cricket');
            const data = await response.json();
            const dataArray = await data.results
            setNews(dataArray);

          } catch (error) {
            setError(error); // Set error state
          } finally {
            setIsLoading(false); // Set loading state to false after fetching or error
          }
        };

        fetchNews();
    }, []); // Empty dependency array to fetch data only once


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
     
    if (!news || news.length === 0) {
        return <div>No news found.</div>;
      }
    const id = Math.floor((Math.random() * 10) + 1);

    return (
        <div className='newsDiv'>

            {news ?
                <div className='newsContainer'>
                    <div style={{
                        position: 'relative'
                    }}>
                        <p className='newsTitle'>
                            {news[id]?.title || ''}
                        </p>
                        <img
                            src={news[id]?.image_url || ''}
                            alt="AiNews"
                            className='newsImg' />
                    </div>

                    <div className='newsArticleDiv'>
                        <p className='newsArticleText'>
                            {news[id]?.description || ''}
                        </p>
                    </div>
                </div>
                :
                <p>Loading....</p>
            }

        </div>
    )
}

export default News