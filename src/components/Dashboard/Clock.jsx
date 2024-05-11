import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import downArrow from '../../../public/assets/downArrow.png'
import upArrow from '../../../public/assets/upArrow.png'



const Clock = () => {

  const [duration, setDuration] = useState(5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null)

  const timerProps = {
    strokeWidth: 6,
    colors: '#FF6A6A',
    size: '200'
  };

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);


  const increaseSeconds = () => {
    setDuration(prevDuration => prevDuration + 1)

  }

  const decreaseSeconds = () => {
    if (remainingTime > 1)
      setDuration(prevDuration => prevDuration - 1)
  }

  const increaseMinutes = () => {
    setDuration(prevDuration => prevDuration + 60)
  }

  const decreaseMinutes = () => {
    if (remainingTime > 60)
      setDuration(prevDuration => prevDuration - 60)
  }

  const increaseHours = () => {
    setDuration(prevDuration => prevDuration + 3600)
  }
  const decreaseHours = () => {
    if (remainingTime > 3600)
      setDuration(prevDuration => prevDuration - 3600)
  }


  const children = ({ remainingTime }) => {

    const hours = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (remainingTime % 60).toString().padStart(2, '0');

    return <div className='counterStyle'>
      <div style={{ fontSize: '18px', fontFamily: 'Roboto' }}>Remaining</div>
      <div style={{ fontSize: '32px', fontFamily: 'Roboto', margin: '0.8em' }}>{hours}:{minutes}:{seconds}</div>
      <div style={{ fontSize: '18px', fontFamily: 'Roboto' }}>Time</div>
    </div>
  }



  return (
    <div className='clockDiv'>

      <div>
        <CountdownCircleTimer
          {...timerProps}
          key={key}
          isPlaying={isPlaying}
          duration={duration}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}   // repeat animation in 1.5 seconds
        >
          {remainingTime && children}
        </CountdownCircleTimer>
      </div>
      <div className='timerContainer'>

        <div className='timerH' >
          <p style={{ marginLeft: '0.5em' }}>Hours</p>
          <p style={{ marginLeft: '0.7em' }}>Minutes</p>
          <p style={{ marginLeft: '0.5em' }}>Seconds</p>
        </div>

        <div className='timerCalDiv'>
          <div className='timerCalContainer'>
            <button className='timerPushButtons' onClick={increaseHours}>
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
                style={{ backgroundColor: '#1E2343' , cursor: 'pointer' }}
              />
            </button>
            <span className='timerCalData'>
              {Math.floor(duration / 3600)}
            </span>
            <button className='timerPushButtons' onClick={decreaseHours}>
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow"
                style={{ backgroundColor: '#1E2343', cursor: 'pointer'  }}
              />
            </button>
          </div>

          <span className='timerCalSeparator'>:</span>

          <div className='timerCalContainer'>
            <button className='timerPushButtons' onClick={increaseMinutes}>
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
                style={{ backgroundColor: '#1E2343', cursor: 'pointer'  }} />
            </button>
            <span className='timerCalData'>
              {duration > 3600 ? Math.floor((duration % 3600) / 60) : Math.floor(duration / 60)}
            </span>
            <button className='timerPushButtons' onClick={decreaseMinutes}>
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow"
                style={{ backgroundColor: '#1E2343', cursor: 'pointer'  }} 
                 />
            </button>
          </div>

          <span className='timerCalSeparator'>:</span>

          <div className='timerCalContainer'>
            <button className='timerPushButtons' onClick={increaseSeconds}>
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
                style={{ backgroundColor: '#1E2343', cursor: 'pointer'  }} />
            </button>
            <span className='timerCalData'>
              {duration > 60 ? duration % 60 : duration}
            </span>
            <button className='timerPushButtons' onClick={decreaseSeconds}>
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow" 
                style={{ backgroundColor: '#1E2343', cursor: 'pointer'  }} />
            </button>
          </div>
        </div>

        <div className='buttonDiv' >

          {isPlaying ?
            <button className='buttonPauseNStart' onClick={() => setIsPlaying(false)}>
              <p className='button'>Pause</p>
            </button>
            :
            <button className='buttonPauseNStart' onClick={() => setIsPlaying(true)}>
              <p className='button'>Start</p>
            </button>
          }

          <button className='buttonRestart' onClick={() => setKey(prevKey => prevKey + 1)}>
            <p className='button'>Restart</p>
          </button>

          <button className='buttonReset' onClick={() => {
            setDuration(5),
              setRemainingTime(duration),
              setIsPlaying(false),
              setKey(0)
          }}>
            <p className='button'>Reset</p>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Clock

