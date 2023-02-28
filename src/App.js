/*

* This design and developed by Eswar.
* Student - web developer
* project - simple calculator.

*/



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
  // default values
  const[input, setInput] = useState(" ");
  const[result, setResult] = useState(0);

  // onlick function
  const handler = e =>{
    setInput(e.target.value);
  }
  

  return(
    <div className='container'>
        <center>
          <div class="table-responsive">
          <table class="table table-dark table-bordered">
            <thead>
              <tr>
                <td colSpan={4}>
                  <input type="text" className='result form-control' value={input} name="input" onChange={handler} />
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <input type="text" value={result} className='end form-control'/>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td>
                  <button onClick={() => setInput('')} className='form-control'>Clear</button>
                </td>
                <td>
                  <button onClick={() => setResult(0)} className='form-control'>RC</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '%')} className='form-control'>%</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '/')} className='form-control'>/</button>
                </td>
              </tr>

              <tr className=''>
                <td>
                  <button onClick={() => setInput(input + '7')} className='form-control'>7</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '8')} className='form-control'>8</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '9')} className='form-control'>9</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '*')} className='form-control'>*</button>
                </td>
              </tr>
              
              <tr className=''>
                <td>
                  <button onClick={() => setInput(input + '4')} className='form-control'>4</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '5')} className='form-control'>5</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '6')} className='form-control'>6</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '-')} className='form-control'>-</button>
                </td>
              </tr>

              <tr className=''>
                <td>
                  <button onClick={() => setInput(input + '1')} className='form-control'>1</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '2')} className='form-control'>2</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '3')} className='form-control'>3</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '+')} className='form-control'>+</button>
                </td>
              </tr>


              <tr className='lastrow'>
                <td>
                  <button onClick={() => setInput(input + '0')} className='form-control'>0</button>
                </td>
                <td>
                  <button onClick={() => setInput(input + '.')} className='form-control'>.</button>
                </td>
                <td colSpan={2}>
                  <button  onClick={() => setResult(eval(input))} className='form-control'>=</button>
                </td>
              </tr>
        
            </tbody>
          </table>
        </div>
        </center>
    </div>
  )
}

export default App;


