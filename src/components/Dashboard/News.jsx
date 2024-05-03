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
          //https://newsapi.org/v2/everything?q=education&apiKey=e9484c5b62024374bac712970554f4c6
          try {
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_4339544e36cda2318a44f5b6dc34fcccb9b0c&country=in');
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


    console.log(news)


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // if (!news || !news.status || !news.status === 'ok') {
    //     return <div>No news available.</div>; // Handle case where no news is returned
    // }

    const id = Math.floor((Math.random() * 10) + 1);
    // const randomNews = news[Math.floor(Math.random() * news.length)];

    // const randomIndex = Math.floor(Math.random() * news.length);
    // const randomNews = news[randomIndex];
    // const image = randomNews.image_url ? randomNews.image_url : '';
    // const description = randomNews.description ? randomNews.description : '';

    // console.log(randomNews.title)
    // console.log(description)
    // console.log(image)
    return (
        <div className='newsDiv'>

            {news ?
                <div className='newsContainer'>
                    <div style={{
                        position: 'relative'
                    }}>
                        <p className='newsTitle'>
                            {/* {randomNews.title} */}
                            {news[id].title}
                        </p>
                        <img
                            src={news[id].image_url}
                            alt="AiNews"
                            className='newsImg' />
                    </div>

                    <div className='newsArticleDiv'>
                        <p className='newsArticleText'>
                            {news[id].description}
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






        // const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-IN';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'a96e25aa9emshb4c318b4bc68d04p14f8f1jsnd20a5f1b35c3',
        //         'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
        //     }
        // };

        // try {
        //     fetch(url, options)
        //     .then((response) => response.json())
        //     .then(res => res.items)
        //     .then(data => setNews(data));
        // } catch (error) {
        //     console.error(error);
        // }