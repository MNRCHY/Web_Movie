import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Form, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLogin from '../components/GoogleLogin'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getToken = localStorage.getItem('token')
    setToken(getToken)
    // console.log(getToken)
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email === '') {
      alert ('Email is required')
    }
    if (password === '') {
      alert ('Password is required')
    }
    if (email !== '' && password !== ''){
      const data = {email, password};
      
      try {
        const res = await axios.post(
          // ntar masukkin file env
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`,
          data
        )
        if (res.data.token){
          localStorage.setItem('token', res.data.token)
          setToken(res.data.token)
          navigate('/')
        }
      } catch (error) {
        alert(error.response.data.message)
        
      }
    }
  }

  const handleLogout = () =>{
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <div className='LogSection'>
      <div className='FormContainer'>

        <div className='d-flex justify-content-center'>

          <div className='FormSection'>

            {!token ?(
                          <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
                          <Stack gap={2}>
            
                            <div className='d-flex justify-content-center text-white mb-4'>
                              <h2> <strong>LOGIN</strong> </h2>
                            </div>
            
                            <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                            <Button type='submit'> Login</Button>
            
                            <div className='mt-4 d-flex justify-content-center'>
                              <p className='text-white'>Login with :</p>
                            </div>
                            {/* <Button>Google</Button> */}
                            <div className='d-flex justify-content-center'>
                            <GoogleLogin setToken={setToken}/>
                            </div>
            
                            <div className='d-flex justify-content-center text-white mt-4'>
                              <p> Don't have an account? </p>
                              <Link to='/register' className='regisLink text-white ms-1'> <strong><span> Register</span></strong> </Link>
                            </div>
            
                          </Stack>
                        </Form>
            ):(
              <div className='d-flex justify-content-center'>
                <Button variant='danger' size='lg' onClick={handleLogout}> Logout </Button>
              </div>
            )}

            {/* <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
              <Stack gap={2}>

                <div className='d-flex justify-content-center text-white mb-4'>
                  <h4> <strong>LOGIN</strong> </h4>
                </div>

                <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                <Button type='submit'> Login</Button>

                <div className='mt-4 d-flex justify-content-center'>
                  <p className='text-white'>Login with :</p>
                </div>
                <Button>Google</Button>

                <div className='d-flex justify-content-center text-white mt-4'>
                  <p> Don't have an account? </p>
                  <Link to='/register' className='regisLink text-white ms-1'> <strong><span> Register</span></strong> </Link>
                </div>

              </Stack>
            </Form> */}

          </div>

        </div>
      </div>

      <div className='LogOrnament d-flex justify-content-center'>
        <div>
          <Stack>
            <Link to='/' className='BrandLink'>
              <h1 className='BrandLogoTag'>MUVI<span>CRIB</span></h1>
              <h4 style={{color: '#dfdfdf'}}> Your Online Movie Database</h4>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default SignIn