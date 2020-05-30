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
      <p>{name}</p>
      <p>{alumno.email}</p>
    </div>)
}

export default AlumnoCard
