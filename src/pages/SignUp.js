import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLogin from '../components/GoogleLogin'


function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name ===''){
      alert('Name is required')
    }
    if (email === ''){
      alert('Email is required')
    }
    if (password === ''){
      alert('Password is required')
    }
    if (passConfirm === ''){
      alert('Please confirm your password')
    }
    if (passConfirm !== password){
      alert('Password confirmation invalid')
    }
    if (name !== '' && email !== '' && password !== '' && passConfirm === password){
      const data = {name, email, password, passConfirm}
      console.log(data)
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`,
          data
        )
        if (res.data.token) {
          localStorage.setItem('token', res.data.token)
          alert('Registrasi Berhasil')
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
            {!token? (
                          <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
                          <Stack gap={2}>
                            <div className='d-flex justify-content-center text-white mb-4'>
                              <h2> <strong>REGISTER</strong> </h2>
                            </div>
            
                            <Form.Control type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Form.Control type='password' placeholder='Confirm password' value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}/>
                            <Button type='submit'> Register </Button>
            
                            <div className='mt-4 d-flex justify-content-center'>
                              <p className='text-white'>Register with :</p>
                            </div>
            
                            <div className='d-flex justify-content-center'>
                              <GoogleLogin setToken={setToken}/>
                            </div>
            
                            <div className='d-flex justify-content-center text-white mt-4'>
                              <p> Already have an account? </p>
                              <Link to='/login' className='regisLink text-white ms-1'> <strong><span> Login </span></strong> </Link>
                            </div>
                          </Stack>
                        </Form>
            ):(
              <div className='d-flex justify-content-center'>
                <Button variant='danger' size='lg' onClick={handleLogout}> Logout </Button>
              </div>
            )}          
            {/* // <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
            //   <Stack gap={2}>
            //     <div className='d-flex justify-content-center text-white mb-4'>
            //       <h2> <strong>REGISTER</strong> </h2>
            //     </div>

            //     <Form.Control type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            //     <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            //     <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            //     <Form.Control type='password' placeholder='Confirm password' value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}/>
            //     <Button type='submit'> Register </Button>

            //     <div className='mt-4 d-flex justify-content-center'>
            //       <p className='text-white'>Register with :</p>
            //     </div>

            //     <div className='d-flex justify-content-center'>
            //       <GoogleLogin setToken={setToken}/>
            //     </div>

            //     <div className='d-flex justify-content-center text-white mt-4'>
            //       <p> Already have an account? </p>
            //       <Link to='/login' className='regisLink text-white ms-1'> <strong><span> Login </span></strong> </Link>
            //     </div>
            //   </Stack>
            // </Form> */}

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

export default SignUp