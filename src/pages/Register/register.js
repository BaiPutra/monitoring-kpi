import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'
// import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className='bg-image' alt='imageBg' />
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        <Input label='Full Name' placeholder='Full Name' />
        <Gap height={18} />
        <Input label='Email' placeholder='Email' />
        <Gap height={18} />
        <Input label='Password' placeholder='Password' />
        <Gap height={20} />
        <Button title='Register' />
        <Link title='Already have an account ? Login here!' />
        <Gap height={90} />
      </div>
    </div>
  )
}

export default Register