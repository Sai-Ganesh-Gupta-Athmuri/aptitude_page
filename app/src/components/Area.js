import React from 'react'
import Sidenav from './Sidenav'

export default function Area() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Area Calculation</h1><br/>
            <hr/><br/><br/>
            <h2>Important Fact and Formulae</h2><br/>
            <p>Following are important facts and formulaes used in questions for area calculations.</p><br/>

            <h2>Rectangle/Square</h2><br/>
            <ul className='mainpoints3'>
            <li>Area of a rectangle = Length x Breadth</li>

            <li>Length of a rectangle = Area / Breadth</li>

            <li>Breadth of a rectangle = Area / Length</li>

            <li>Perimeter of a rectangle = 2(Length + Breadth)</li>

            <li>Area of 4 walls = 2(length+ Breadth) x height</li>

            <li>Area of a Square = (side)2 = 1/2(diagonal)2</li>
            </ul><br/>
            <h2>Triangle</h2><br/>
            <ul className='mainpoints4'>
            <li>Area of a triangle= (1/2 x Base x Height)</li>

            <li>△ =√(S * (S-A) (S-B)(S-C)), where S=1/2(a+b+c)</li>

            <li>Area of equilateral triangle = √3/4 x a2</li>

            <li>Radius of a in circle of an equilateral triangle of side a = a/2√3</li>

            <li>Radius of a circumcircle of an equilateral triangle of side a =a/√3</li>

            <li>Radius of in circle of a triangle= △/S, Where s=1/2(a+b+c)</li>
            </ul><br/>
            <h2>Circle</h2><br/>
            <ul className='mainpoints'>
            <li>Area of a circle= πR2</li>

            <li>Circumference = 2πR</li>

            <li>Arc length= 2πRϑ/360, where ϑ is a central angle.</li>

            <li>Area of Sector=1/2(arc length x R) = πR2ϑ/360</li>

            <li>Area of Semicircle= 1/2πR2</li>
            </ul><br/>
            <h2>Other shapes</h2><br/>
            <ul className='mainpoints'>
            <li>Area of a parallelogram = (base x height)</li>

            <li>Area of a rhombus= 1/2(product of diagonals)</li>

            <li>Area of a trapezium= 1/2 (sum of parallel sides) x (distance between them)</li>
            </ul>
        </div>
    </div>
  )
}
