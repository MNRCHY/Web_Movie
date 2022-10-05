import React from 'react'
import { Link } from 'react-router-dom'

function FooterSection() {
  return (
    <div className='webFooter p-3 mt-5'>
      <Link to='/' className='BrandLink'>
        <h3 className='BrandLogo'>MUVI<span>CRIB</span></h3>
      </Link>
    </div>
  )
}

export default FooterSection