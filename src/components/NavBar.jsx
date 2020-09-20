import React from 'react'
import './styles/NavBar.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  return (
    <section className='gb__nav-bar'>
      <Container>
        <i className="fas fa-chevron-circle-up"></i>
        <FontAwesomeIcon icon='chevron-circle-up' />

        <Router>
          <nav className='gb__nav'>
            <ul>
              <li className='gb__nav__item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='gb__nav__item'>
                <Link className='dropdown'>Admission</Link>
                <ul>
                  <li className='gb__nav__item'>
                    <Link to='/registration'>Registration Form</Link>
                  </li>
                  <li className='gb__nav__item'>
                    <Link to='/tuition-fee'>Tuition Fee Options</Link>
                  </li>
                </ul>
              </li>
              <li className='gb__nav__item'>
                <Link to='/programs'>Programs</Link>
              </li>
              <li className='gb__nav__item'>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
              <li className='gb__nav__item'>
                <Link to='/about-us'>About Us</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </Container>
    </section>
  )
}

export default NavBar
