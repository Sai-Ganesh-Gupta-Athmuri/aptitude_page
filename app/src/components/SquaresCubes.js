import React from 'react'
import Sidenav from './Sidenav'

export default function SquaresCubes() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Squares & Cubes</h1><br/>
            <hr/><br/><br/>
            <h2>Square Root</h2><br/>
            <p>When y = x2 then square root of y is x and it is written as √y = x.</p><br/>

            <p>For example, √9 = 3, √16 = 4 and so on.</p><br/>

            <h2>Cube Root</h2>
            <p>When y = x3 then cube root of y is x and it is written as ∛y = x.</p><br/>

            <p>For example, ∛8 = 2, ∛27 = 3 and so on.</p><br/>

            <h2>Important Formulae</h2><br/>
            <ul className='mainpoints2'>
            <li>√ab = √a x √b</li>

            <li>√(a/b) = √a / √b</li>
            </ul>
        </div>
    </div>
  )
}
