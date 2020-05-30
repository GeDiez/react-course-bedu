import React from "react";
import './AlumnoCard.css'
// helloMyWorld <-

function AlumnoCard(props) {
  const {alumno, isHidden} = props
  console.log(props)

  const name = alumno.firstName + ' ' + alumno.lastName

  return (
    <div className={`card ${isHidden ? 'is-hidden' : ''}` }>
      <img src={alumno.avatar} width="100px" alt=""/>
      <p className="card__aliasText">{name}</p>
      <p className="card__typeText">{alumno.email}</p>
    </div>)
}

export default AlumnoCard
