import React, { useEffect, useState } from 'react'
import './Dashboard.css'

const News = () => {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    useEffect(() => {
        setIsLoading(true); // Set loading state to true
        setError(null); // Clear potential errors

        fetch('https://newsapi.org/v2/everything?q=ai&apiKey=e9484c5b62024374bac712970554f4c6')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setNews(data);
            })
            .catch(error => {
                setError(error); // Set error state
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after fetching or error
            });

    }, []); // Empty dependency array to fetch data only once

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!news) {
        return <div>No news available.</div>; // Handle case where no news is returned
    }

    if (!news || !news.articles) {
        return <div>No news available.</div>; // Handle case where no news is returned
    }
    const id = Math.floor(Math.random() * news.articles.length)



    return (
        <div className='newsDiv'>

            {news ?
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
