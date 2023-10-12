import React from 'react'
import Sidenav from './Sidenav'

export default function HcfLcm() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - HCF and LCM</h1><br/>
            <hr/><br/><br/>
            <h2>Factors and Multiples</h2><br/>
            <p>If a number P divides another number Q exactly, we say that P is a factor of Q i.e. Q is a multiple of P.</p><br/>

            <h2>H.C.F</h2>
            <p>The H.C.F of two or more than two numbers is the greatest number that divides each of them exactly.</p><br/>

            <h2>L.C.M</h2><br/>
            <p>The least number which is exactly divisible by each one of the given numbers is called their L.C.M</p><br/>

            <h2>Product of two numbers</h2><br/>
            <p>Product of their H.C.F and L.C.M</p><br/>

            <h2>Co-primes</h2><br/>
            <p>Two numbers are co-primes if their H.C.F is 1.</p><br/>

            <h2>H.C.F and L.C.M of fractions</h2><br/>
            <ol className='mainpoints'>
            <li>H.C.F = H.C.F of Numerators/L.C.M of Denominators</li><br/>
            <li>L.C.M = L.C.M of Numerators/H.C.F of Denominators</li>
            </ol><br/>
        </div>
    </div>
  )
}
