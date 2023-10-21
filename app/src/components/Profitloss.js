import React from 'react'
import Sidenav from './Sidenav';

export default function Profitloss() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Profit & Loss</h1><br/>
            <hr/><br/><br/>
            <ol className='mainpoints3'>
            <li>Cost Price, (c.p.) = The price, at which an article is purchased, is called its cost price.</li>

            <li>Selling price (s.p) = The price, at which an article is sold, is called its selling price.</li>

            <li>Profit or Gain = (S.P) - (C.P)</li>

            <li>Loss = (C.P) - (S.P)</li>

            <li>Gain or Loss is always reckoned on C.P.</li>
            </ol><br/>
            <h2>Formulae</h2><br/>
            <ol className='mainpoints3'>
            <li>Gain% = (Gain*100) / C.P</li>

            <li>Loss% = (Loss*100) / C.P</li>

            <li>S.P = (100+ Gain %) /100 * (C.P)</li>

            <li>S.P = (100-Loss %) / 100 * (C.P)</li>

            <li>C.P = 100 / (100 + Gain %)* (S.P)</li>

            <li>C.P = 100 / (100-Loss %)* (S.P)</li>
            </ol><br/>
            <h2>Important cases</h2><br/>
            <ol className='mainpoints4'>
            <li>If an article is sold at a profit of say, 20%, then SP = 120% of CP.</li>

            <li>If an article is sold at a loss of say, 20%, then SP = 80% of CP.</li>

            <li>When a person sells two similar items, one at a gain of say x% and the other at a loss of say x%. then the seller always incurs a loss given by:

            <br/>Loss% = (x/10)2</li>
            <li>If a seller sells his goods at cost price but uses false weights, then

            <br/>Gain% = [Error/(True value - Error) * 100]%</li>
            </ol>
        </div>
    </div>
  )
}
