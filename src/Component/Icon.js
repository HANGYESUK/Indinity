import React from 'react';
import './Icon.css';

function Icon(props) {

    const calculate = {
        inactive: '/img/calculator_inactive.png',
        active: '/img/calculator_active.png'
    }

    const result = {
        inactive: '/img/result_inactive.png',
        active: '/img/result_active.png'
    }

  return (
    <>
        {
            props.modal != true 
            ? <div className='icon-Container'>
                <img src={calculate.active} onClick={()=>{props.setModal(!props.modal)}}/>
                <img src={result.inactive} onClick={()=>{props.setModal(!props.modal)}}/>
              </div>
            : <div className='icon-Container'>
                <img src={calculate.inactive} onClick={()=>{props.setModal(!props.modal)}}/>
                <img src={result.active} onClick={()=>{props.setModal(!props.modal)}}/>
              </div>
              
        }
    </>
  )
}

export default Icon

