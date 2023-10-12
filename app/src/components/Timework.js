import React from 'react'
import Sidenav from './Sidenav'

export default function Timework() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Number System - Time & Work</h1><br/>
            <hr/><br/><br/><br/>
            <ol>
                <li>If A can do a piece of work in n days, then A's 1 day work = 1/n.</li><br/>
                <li>If A's 1 day work = 1/n, then A can finish the work in n days.</li><br/>
                <li>If A is twice as good a workmen as B, then
                    <ul>
                        <br/><li>Ratio of work done by A and B in the same time = 2:1</li><br/>
                        <li>Ratio of time taken by A and B in doing the same work = 1:2</li>
                    </ul>
                </li>
            </ol><br/>
        </div>
    </div>
  )
}