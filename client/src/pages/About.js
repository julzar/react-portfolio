import React from 'react'
import { Pic } from '../style'
import Bio from '../components/Bio'

const About = () => {
  return (
    <>
    <div className='divider grey darken-4'></div>
    <div className='row'>
      <div className='col s12 m6'>
        <Pic src='/images/me.jpg' className='animate__animated animate__fadeIn animate__slow' />
      </div>
      <div className='col s12 m6'>
        <Bio />
      </div>
    </div>
    </>
  )
}

export default About