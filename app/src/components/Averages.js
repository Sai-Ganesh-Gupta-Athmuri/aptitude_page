import React from 'react'
import Sidenav from './Sidenav'

export default function Averages() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Averages</h1><br/>
            <hr/><br/><br/>
            <h2>Average</h2>
            <p className='mainpoints2'>Average = (Sum of Observations/Number of Observations)</p><br/>
            <h2>Average Speed</h2><br/>
            <p>Suppose a man covers a certain distance at m kmph and an equal distance at y kmph. Then,:</p><br/>
            <p className='mainpoints2'>Average speed (during the whole journey)<br/> = (2xy/(x + y))kmph</p><br/>
        </div>
    </div>
  )
}
