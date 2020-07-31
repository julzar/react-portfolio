import React from 'react'
import li from '../icons/li.png'
import gh from '../icons/gh-lt.png'
import gm from '../icons/gm.png'
import { ImgDiv, Badge } from '../style'

const Connect = () => {
  return (
    <>
    <div className='divider grey darken-4'></div>
    <div className='row'>
      <ImgDiv className='col s12 m4'>
        <a href='https://github.com/julzar' target='_blank' rel='noopener noreferrer'><Badge src={gh} className='animate__animated animate__fadeIn'/></a>
      </ImgDiv>
      <ImgDiv className='col s12 m4'>
        <a href='https://www.linkedin.com/in/jules-lazar-a629231a5/' target='_blank' rel='noopener noreferrer'><Badge src={li} className='animate__animated animate__fadeIn'/></a>
      </ImgDiv>
      <ImgDiv className='col s12 m4'>
        <a href='mailto:electronicallyreached@gmail.com' target='_blank' rel='noopener noreferrer'><Badge src={gm} className='animate__animated animate__fadeIn'/></a>
      </ImgDiv>
    </div>
    </>
  )
}

export default Connect