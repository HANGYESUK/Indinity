import './App.css';
import NumButton from './Component/NumButton';
import Icon from './Component/Icon';
import CalculateButton from './Component/CalculateButton';
import Calculate from './Component/Calculate';
import { useState } from 'react';
import Result from './Pages/Result';

function App() {

  const number = ['0','1','2','3','4','5','6','7','8','9']

  const calculate = ["C", "%", "/", "*", "-", "+", "="]

  let [cal, setCal] = useState("");

  let [result, setResult] = useState();

  let [record, setRecord] = useState([]);

  let [modal, setModal] = useState(false);

  console.log(record)


  return (
    <div className="App colum">
      {
        modal != true
        ? <>
            <h1>Calculate</h1>
            <Calculate cal={cal} result={result}/>
            <div className='cal-Conatiner'>
              {
                calculate.map((item, index)=>{
                  return (
                    <CalculateButton btn={item} setCal={setCal} cal={cal} setResult={setResult} result={result} setRecord={setRecord} record={record}/>
                  )
                })
              }
              <div className='num-Btn'>
                {
                  number.map((item, index)=>{
                    return (
                      <NumButton number={item} setCal={setCal} cal={cal}/>
                    )
                  })
                }
              </div>
            </div>
          </>
        : <Result record={record}/>
      }

      <Icon setModal={setModal} modal={modal}/>
    </div>
  );
}

export default App;
