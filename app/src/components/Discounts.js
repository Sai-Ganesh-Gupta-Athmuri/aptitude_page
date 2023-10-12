import React from 'react'
import Sidenav from './Sidenav'

export default function Discounts() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Number System - Discounts</h1><br/>
            <hr/><br/><br/>
            <p>Suppose a man has to pay Rs. 156 after 4 years and the rate of interest is 14% per annum. Clearly, Rs. 100 at 14% will amount to R. 156 in 4 years. So, the payment of Rs. now will clear off the debt of Rs. 156 due 4 years hence. We say that:</p><br/>

            <p>Sum due = Rs. 156 due 4 years hence;</p><br/>

            <p>Present Worth (P.W.) = Rs. 100;</p><br/>

            <p>True Discount (T.D.) = Rs. (156 - 100) = Rs. 56 = (Sum due) - (P.W.)</p><br/>

            <p>We define: T.D. = Interest on Present Worth;<br/> <h3>Amount = Present Worth + True Discount</h3></p><br/>

            <p>Interest is reckoned on P.W. and true discount is reckoned on the amount.</p><br/>

            <h2>Important Formulae</h2><br/>
            <p>Let rate = R% per annum and Time = T years. Then,</p><br/>

            <p className='mainpoints2'>P.W. =	(100 x Amount) / (100 + (R x T)) 
            = (100 x T.D.)/ (R x T)</p><br/>
            <p className='mainpoints2'>T.D. = (P.W. x R x T) / 100
            = (Amount x R x T) / (100 + (R x T))</p><br/>
            <p className='mainpoints2'>Sum = (S.I. x T.D.) / (S.I. - T.D.)</p><br/>
            <p className='mainpoints2'>S.I. - T.D.  = S.I. on T.D.</p><br/>
            <p className='mainpoints2'>When the sum is put at compound interest, then 
            P.W. = Amount/ (1+R/100)T</p><br/>
        </div>
    </div>
  )
}
