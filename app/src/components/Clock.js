import React from 'react'
import Sidenav from './Sidenav'

export default function Clock() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Clock</h1><br/>
            <hr/><br/><br/>
            
            <p>The face or dial of a watch is a circle whose outline is partitioned into 60 equivalent amounts of, called moment spaces.</p><br/>

            <p>A timekeeper has two hands, the littler one is known as the hour hand or short hand while the bigger one is known as the moment hand or long hand.</p><br/>
            <ol className='mainpoints5'>
            <li>In an hour, the moment hand pick up 55 minutes on the hour hand.</li><br/>

            <li>In consistently, both the hands concur once each hour.</li><br/>

            <li>The hands are in the same straight line when they are incidental or inverse to one another.</li><br/>

            <li>Edge followed by hour hand in 12 hrs = 360°</li><br/>

            <li>Angel followed by moment hand in 60 min. = 360°</li><br/>

            <li>The hour spaces are 30° spaces apart. (360°/12 = 30°)</li><br/>

            <li>The minute spaces are 6° spaces apart. (360°/60 = 6°)</li><br/>

            <li>When the two hands are at rights angles 90°, they are 90/6 = 15 minutes apart. This occurs twice in every hour.</li><br/>

            <li>When the two hands are in opposite directions, they are 180/6 = 30 minutes apart. This occurs once in each hour.</li><br/>

            <li>When the hands coincide, they are 00 and zero minutes apart.</li><br/>
            </ol><br/>
            <h2>Too quick</h2><br/>
            <p>On the off chance that a watch or a clock shows 8.15, when the right time is 8, it is said to be 15 minutes too quick.</p><br/>

            <h2>Too moderate</h2><br/>
            <p>In the event that it showed 7.45, when the right time is 8,it is said to be 15 minutes too moderate.</p><br/>
        </div>
    </div>
  )
}
