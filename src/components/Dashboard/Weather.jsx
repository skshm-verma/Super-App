import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import date from 'date-and-time';
import windSpeed from '../../../public/assets/windSpeed.png'
import pressureCheck from '../../../public/assets/pressureCheck.png'
import rainCheck from '../../../public/assets/rainCheck.png'
import humidityCheck from '../../../public/assets/humidityCheck.png'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Kanpur%20%2CIndia&contentType=json&unitGroup=metric&shortColumnNames=false';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a96e25aa9emshb4c318b4bc68d04p14f8f1jsnd20a5f1b35c3/',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then((response) => response.json())
                .then(res => res.locations["Kanpur ,India"].currentConditions)
                .then((data) => setWeatherData(data))
        } catch (error) {
            console.error(error);
        }
    }, [])

    const now = new Date();
    return (
        <div className='weatherDiv'>
            <div className='weatherDnT'>
                <span className='dateStyle'>{date.format(now, 'YYYY/MM/DD')}</span>
                <span className='dateStyle' >{date.format(now, 'HH:mm:ss')}</span>
            </div>
            <div className='weatherDataDiv'>
                <div className='weatherDataContainer'>
                    {weatherData && weatherData.cloudcover === null ?
                        <>
                            <img
                                width="28"
                                height="28"
                                src="https://img.icons8.com/external-kosonicon-outline-kosonicon/64/FFFFFF/external-clear-sky-weather-kosonicon-outline-kosonicon.png"
                                alt="clear-sky-icon" />
                            <p style={{
                                color: 'white',
                                fontSize: '18px',
                                marginTop: '0.8em'
                            }}>Clear Sky
                            </p>
                        </>
                        :
                        <>
                            <img
                                height='28px'
                                width='28px'
                                src={rainCheck}
                                alt="rainIcon" />
                            <p style={{
                                color: 'white',
                                fontSize: '18px',
                                marginTop: '0.8em'
                            }}>Heavy Rain
                            </p>
                        </>}
                </div>

                <span className='partition'>|</span>

                <div className='weatherDataContainer'>

                    <p style={{
                        fontSize: '24px',
                        color: 'white'
                    }}>
                        {weatherData && weatherData.temp}
                        <img
                            width="16"
                            height="16"
                            src="https://img.icons8.com/metro/26/FFFFFF/temperature.png"
                            alt="temperature"
                            style={{ marginLeft: '0.5em' }} />
                    </p>

                    <div style={{
                        display: 'flex',
                        marginTop: '1em'
                    }}>
                        <img
                            height='16px'
                            width='16px' src={pressureCheck}
                            alt="pressureIcon" />
                        <p style={{
                            color: 'white',
                            fontSize: '16px',
                            marginLeft: '0.5em'
                        }}>
                            {weatherData && weatherData.sealevelpressure}
                        </p>
                    </div>

                </div>

                <span className='partition'>|</span>

                <div className='weatherDataContainer'>

                    <div style={{
                        display: 'flex',
                        marginBottom: '1em'
                    }}>
                        <img
                            height='18px'
                            width='18px'
                            src={windSpeed}
                            alt="windSpeedIcon" />
                        <p style={{
                            fontSize: '20px',
                            color: 'white',
                            marginLeft: '0.5em'
                        }}>
                            {weatherData && weatherData.wspd}
                        </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img width="12px" height="16px" src={humidityCheck} alt='humidityIcon' />
                        <p style={{
                            fontSize: '20px',
                            color: 'white',
                            marginLeft: '0.5em'
                        }}>{weatherData && weatherData.humidity}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Weather