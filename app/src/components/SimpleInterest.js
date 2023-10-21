import React from 'react'
import Sidenav from './Sidenav'

export default function SimpleInterest() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Simple Interest</h1><br/>
            <hr/><br/><br/>
            <ol>
            <li><b>Simple Interest:</b> If the interest on a sum of money borrowed for a certain time period is reckoned uniformly, it is called as Simple Interest.</li><br/>

            <li>If Principal = P, Rate = R% per annum, Time = T years, then<br/>

            <br /><p className='mainpoints6'>Simple Interest (S.I) = P * T * R / 100</p></li><br/>
            <p>The above expression involves four quantities: P, I, T and R. If three of them are known to us,the fourth one can be easily found out.</p><br/>

            <li><p className='mainpoints6'>Amount (A) = Principal(P) + Interest(I)</p><br/>
            <p>We can correlate it as</p><br/>

            <p className='mainpoints2'>A = P + P * T * R/100 <br/>
            Or, <br/>
            A = P(1 + T * R/100)<br/></p></li><br/>
            <li>When time is given in days, convert it into years by dividing by 365. Similarly, if given in months, convert it into years by dividing it by 12.</li><br/>

            <li>When type of interest is not specified, it is assumed to be simple interest.</li><br/>

            <li>Rate of interest is taken per annum unless specified otherwise.</li><br/>

            <li>The day when money is deposited or borrowed is omitted while the day on which money is withdrawn or paid back is counted in calculating time period.</li><br/>
            </ol><br/>
        </div>
    </div>
  )
}
