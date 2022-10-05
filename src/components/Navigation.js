import React from 'react'
import { Form, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar className='NavSection p-4 d-flex justify-content-between' >
            <Link to='/' className='BrandLink'>
            <h4 className='BrandLogo'>MUVI<span>CRIB</span></h4>
            </Link>
            
            <Form className=' ActionNav d-flex justify-content-between'>
                <Form.Control type='text' placeholder='Search...'></Form.Control>
                <button onClick={() => navigate('/signin')} className='NavButton'> Sign In </button>
                <button onClick={() => navigate('/signup')} className='NavButton'> Sign Up </button>
            </Form>
        </Navbar>
    </div>
  )
}

export default Navigation