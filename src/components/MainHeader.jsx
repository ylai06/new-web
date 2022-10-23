import { Link } from 'react-router-dom'
import Image from '../images/heart.png'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join THe Length Of The FItness World</h1>
          <p>
            Love's not Time's fool, though rosy lips and cheeks
            Within his bending sickle's compass come;
            Love alters not with his brief hours and weeks,
            But bears it out even to the edge of doom:
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_circle">

          </div>
          <div className="main_header_image">
            <img src={Image} alt='main header'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader