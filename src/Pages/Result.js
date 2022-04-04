import React from 'react';
import './Result.css';

function Result({record}) {
  return (
    <div>
         <h1>Result</h1>
         {
             record.map((item, index)=>{
                 return (
                    <div>
                        <p className='cal'>{item.cal}</p>
                        <p className='result'>{item.result}</p>
                    </div>
                 )
             })
         }

    </div>
  )
}

export default Result