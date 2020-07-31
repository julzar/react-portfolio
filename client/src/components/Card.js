import React, { useState } from 'react'
import { CardOutline } from '../style'

const Card = ({ title, description, img, github, site }) => {
  const [hover, setHover] = useState(false)

  return (
    <div className="col s12 m4">
      <CardOutline className="animate__animated animate__fadeIn animate__slow card black sticky-action" style={hover ? {boxShadow: '0px 0px 8px 4px  white'} : {}}
        onMouseOver={()=>setHover(true)} 
        onMouseOut={()=>setHover(false)}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={img} />
        </div>
        <div className="card-content">
          <span className="card-title activator">{title}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-reveal black">
          <span className="card-title white-text">{title}<i className="material-icons right">close</i></span>
          <p className='white-text'>{description}</p>
        </div>
        <div className="card-action">
          <a href={github} target='_blank' rel='noopener noreferrer'>GitHub</a>
          {site ? <a href={site} target='_blank' rel='noopener noreferrer'>Deployed App</a> : <></>}
        </div>
      </CardOutline>
    </div>
  )
}

export default Card
