import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import thumbnailEa from '../assets/yejiCard.jpg'
function Navigation() {
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    


  return (
    <div>
        <Navbar className='NavSection p-4 d-flex justify-content-between' >
            <Link to='/' className='BrandLink'>
            <h4 className='BrandLogo'>MUVI<span>CRIB</span></h4>
            </Link>
            
            <Form className=' ActionNav d-flex justify-content-between'>
              <div className='searchSection d-flex me-4'>
                <Form.Control onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search...' className='searchForm'></Form.Control>
                <button onClick={()=> navigate(`/result/${search}`)}>Search</button>
              </div>
              
              <button onClick={() => navigate('/signin')} className='NavButton'> Sign In </button>
              <button onClick={() => navigate('/signup')} className='NavButton'> Sign Up </button>
            </Form>
        </Navbar>
    </div>
  )
}

export default Navigation