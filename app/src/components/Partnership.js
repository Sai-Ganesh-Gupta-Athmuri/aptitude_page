import React from 'react'
import Sidenav from './Sidenav';

export default function Partnership() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Partnership</h1><br/>
            <hr/><br/><br/>
            <h2>Partnership</h2><br/>
            <p>When some money is invested by two or more people jointly then they are called partners and under an agreement they invested money is called partnership.</p><br/>

            <h2>Division of Profit/Loss</h2><br/>
            <p>When all investor invested their money for the same time then their profit or loss is divided between them in the ratio of their capital invested. For example, If A and B invested Rs. 2000 and Rs. 3000 then their ratio of their capital will be as follows:</p><br/>

            <p className='mainpoints2'>A: B = 2000: 3000<br/>
            = 2: 3</p><br/> 
            <p>When all investor invested their money for the different durations then calculation of capital will be as follows: (capital * number of unit time)</p><br/>

            <p>If A invest 2000 Rs . for 5 month and 5000 rs. for 7 month and in the opposite side B invested 3500 for 3 month and 2500 rs . for 9 months. Then the calculation of capital as follows :</p><br/>

            <p className='mainpoints'>A: B = (2000*5 + 5000*7) : (3500*3+ 2500*9)<br/> 
            = 45000: 33000 <br/>
            = 15:11</p><br/> 
        </div>
    </div>
  )
}
