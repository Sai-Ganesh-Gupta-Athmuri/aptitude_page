import React from 'react'
import Sidenav from './Sidenav'

export default function Calendar() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Number System - Calendar</h1><br/>
            <hr/><br/><br/>
            <ol>
            <li><b>Odd days :</b> In a given period, the quantity of days more than the complete weeks are called Odd days.</li><br/>

            <li><b>Leap Year :</b> Every year divisible by 4 in a leap year. But not all century years are leap years. Only those century years which are divisible by 400 are leap years and other century years are ordinary years. As an example, 1100, 1300, 1400, 1500, 1700 are ordinary years but 1200, 1600, 2000 are leap years. So every 4th century is a leap year.</li><br/>

            <li><b>Ordinary Year:</b>A non-leap year is an ordinary year. A conventional year has 365 days. A leap year has 366 days.</li><br/>

            <li><b>Counting of odd days:</b>
            <ol>

            <br/><li>1 customary year = 365 days (52 weeks+ 1 day)<br/>
            ∴ 1 customary year has 1 odd day.</li><br/>

            <li>1 jump year =366 days = (52 weeks+2 days)<br/>
            ∴ 1 jump year has 2 odd days.</li><br/>

            <li>100 year =76 normal year +24 jump year<br/>
            = (76*1+24*2) odd days =124 odd days<br/>
            = (17 weeks +5 days) =5 odd days.</li>
            </ol>
            </li><br/>

            <li>No. of odd days in 100 years = 5</li><br/>

            <li>No. of odd days in 200 years = (5*2) =3 odd days.</li><br/>

            <li>No. of odd days in 300 years = (5*3) =1 odd day.</li><br/>

            <li>No. of odd days in 400 years= (5*4+1) = 0 odd days.</li><br/>

            <li>Every one of 800 years, 1200 years, 1600 years, 2000 years and so on has 0 odd days.</li><br/>

            <li><b>Odd days related to days of the week:</b>
            <table>
                <tr>
                    <th>No. of Odd days</th>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <th>Days</th>
                    <td>Sun</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thur</td>
                    <td>Fri</td>
                    <td>Sat</td>
                </tr>
            </table>
            </li><br/>
            <li>
            <ol>
            <li>February: 28 days(ordinary year) gives '0' odd days, 29 days (leap year) gives '1' odd day.</li><br/>

            <li>Jan, March, May, July, Aug, Oct and Dec have 31 days each and therefore give '3' odd days.</li><br/>

            <li>April, June, Sep and Nov each have 30 days and therefore give '2' odd days.</li></ol></li><br/>
            </ol>
        </div>
    </div>
  )
}
