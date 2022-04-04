import React from 'react';
import './Calculate.css'

function Calculate(props) {


  return (
    <div className='calculate'>
        <p className='sub-Title'>{props.cal}</p>
        <h1 className='main-Title'>{props.result}</h1>
    </div>
  )
}

export default Calculate