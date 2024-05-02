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
        const response = await fetch('https://newsapi.org/v2/everything?q=education&apiKey=e9484c5b62024374bac712970554f4c6');
        const data = await response.json();
        setNews(data);
  
      } catch (error) {
        setError(error); // Set error state
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or error
      }
    };

    fetchNews();
  }, []); // Empty dependency array to fetch data only once


  console.log(news)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!news || !news.status || !news.status === 'ok') {
    return <div>No news available.</div>; // Handle case where no news is returned
  }

  const id = Math.floor((Math.random() * 100)+1);
  return (
    <div className='newsDiv'>

      {news && news.articles && news.articles.length > 0 ?
        <div className='newsContainer'>
          <div style={{
            position: 'relative'
          }}>
            <p className='newsTitle'>
              {news.articles[id].title}
            </p>
            <img
              src={news.articles[id].urlToImage}
              alt="AiNews"
              className='newsImg' />
          </div>

          <div className='newsArticleDiv'>
            <p className='newsArticleText'>
              {news.articles[id].description}
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