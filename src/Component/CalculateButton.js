import React from 'react'

function CalculateButton(props) {

    function print(e) {
        if(e.target.value == "=") {
            props.setResult(eval(props.cal))
        }
        else if(e.target.value == "C") {
            props.setCal("")
            props.setResult();
            props.setRecord([...props.record, {cal: props.cal, result: props.result}])
        }
        else {
            props.setCal(props.cal + e.target.value)
        }

    }

  return (
    <div>
        <button className="btn" value={props.btn} onClick={print}>{props.btn}</button>
    </div>
  )
}

export default CalculateButton