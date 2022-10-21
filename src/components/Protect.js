import React from 'react'
import { useNavigate } from 'react-router-dom'

function Protect() {

    const navigate = useNavigate()

    const token = localStorage.getItem('token') 

  return (
    <div>Protect</div>
  )
}

export default Protect