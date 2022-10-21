import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import thumbnailEa from '../assets/yejiCard.jpg'
function Navigation() {
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    const [token, setToken] = useState(null)

    useEffect(() => {
      const getToken = localStorage.getItem('token')
      console.log(`token navbar ${getToken}`)
      setToken(getToken)
    },[])

    const handleLogout = () => {
      localStorage.removeItem('token')
      setToken(null)
    }
  return (
    <div>
        <Navbar className='NavSection p-4 d-flex justify-content-between' >
            <Link to='/' className='BrandLink'>
            <h4 className='BrandLogo'>MUVI<span>CRIB</span></h4>
            </Link>
            
            <Form className=' ActionNav d-flex justify-content-between'>
              <div className='searchSection d-flex me-4'>
                <Form.Control onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search...' className='searchForm'></Form.Control>
                <button onClick={()=> navigate(`/result/${search}`)} className='SearchButton ms-2'>Search</button>
              </div>
            </Form>

            {!token ?(
              <div className='AccButton'>
                <button onClick={() => navigate('/login')} className='NavButton'> Sign In </button>
                <button onClick={() => navigate('/register')} className='NavButton'> Sign Up </button>
              </div>
            ):(
              <div>
                <Button variant='danger' onClick={handleLogout}>Logout</Button>
              </div>
            )}
            {/* <div className='AccButton'>
            <button onClick={() => navigate('/login')} className='NavButton'> Sign In </button>
            <button onClick={() => navigate('/register')} className='NavButton'> Sign Up </button>
            </div> */}
        </Navbar>
    </div>
  )
}

export default Navigation