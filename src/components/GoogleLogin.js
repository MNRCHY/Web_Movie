import React from 'react'
import { Button } from 'react-bootstrap'
import { useGoogleLogin } from '@react-oauth/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function GoogleLogin({setToken}) {
    const navigate = useNavigate()
    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const data = {
                    access_token: response.access_token
                }
                const res = await axios.post(
                  `${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`,
                  data
                )
                if (res.data.token){
                  localStorage.setItem('token', res.data.token)
                  setToken(res.data.token)
                //   alert('Login google berhasil')
                  navigate('/')
                }
              } catch (error) {

                alert(error.response.data.message)
                
              }
        },
        onError: (err) =>{
            alert(err)
        }
    })
  return (
    <div>
        <Button onClick={googleLogin}>
            <FontAwesomeIcon icon={faGoogle} /> Google
        </Button>
    </div>
  )
}

export default GoogleLogin