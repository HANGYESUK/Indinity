import React from 'react';

function NumButton(props) {

    function print(e) {
      props.setCal(props.cal + e.target.value)
    }


  return (
    <div>
        <button className="btn numBtn" value={props.number} onClick={print}>{props.number}</button>
    </div>
  )
}

export default NumButton;