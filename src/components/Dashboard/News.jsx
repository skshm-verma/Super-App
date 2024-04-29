import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    useEffect(() => {
        setIsLoading(true); // Set loading state to true
        setError(null); // Clear potential errors

        fetch('https://api.webz.io/newsApiLite?token=d89742c1-6a6f-4751-81ad-f898f96cb2cf&q=cricket')
            .then((response) => response.json())
            .then(data => {
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
    
    const id = Math.floor(Math.random() * news.posts.length)
    const markUp = {__html : news.posts[id].highlightText }
    

    return (
        <div>
            <p>News Api</p>
            {news ?
                <div>
                    <p>{news.posts[id].title}</p>
                    <p dangerouslySetInnerHTML={markUp}></p>
                    <img src={news.posts[id].thread.main_image} alt="cricketNews" style={{ height: '200px', width: '250px' }} />
                </div>
                :
                <p>Loading....</p>
            }

        </div>
    )
}

export default News
