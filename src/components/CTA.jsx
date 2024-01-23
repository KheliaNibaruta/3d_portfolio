import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a front-end role to propose? <br className='sm:block hidden' />
            Contact me here
        </p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA