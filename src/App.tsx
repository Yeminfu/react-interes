import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-final-form';
import axios from 'axios';
import {EquationForm}  from './components/EquationForm'

//это получаем с сервера, сколько угодно уравнений с id уравнения


//это лежит на сервере, предпологается, что есть много списков уравнений с разной сложностью 
const answers0:string[][] = [
  ['2+x=6','4'], 
  ['x*3=27','9'],
  ['x-7*3=4','25'],
  ['6:2-2=x','1'],
  ['7+x=12','5'],
  ['22*2-4=x','40'],
  ['13+x=22', '9']
]
// сервер отправляет нам масив equations, здесь он генерируется
const equations:string[] = answers0.map(elem => (elem[0]))



const statesOfAswers:any = []
for (let i = 0; i < equations.length; i++) {
  statesOfAswers.push(false)
}

function App(){
  //список правельных и ложных ответов
  const statesOfAswers:any = []
  for (let i = 0; i < equations.length; i++) {
    statesOfAswers.push(false)
  }
  const [statesOfAswer, setStatesOfAnswer] = useState(statesOfAswers)

  const onSubmit = (data:any) => {
    // axios({
    //   method: 'post',
    //   url: '/?service=t_1',
    //   data: {
    //     answer:e.answerField
    //   }
    // }).then(res => console.log(res.data)
    for (let i = 0; i < statesOfAswer.length; i++) {
      const NumOfAnswer = 'fieldAnswer'+i.toString()
      const stat = statesOfAswer;
      if (data[NumOfAnswer]===answers0[i][1]) {
        stat[i] = true
        setStatesOfAnswer(stat)
      }else{
        stat[i] = false
        setStatesOfAnswer(stat)
      }
      
    }
  };
  

  return (
    <div>
      <header style={{ height: 100 }}></header>
      <div className="container">
        <h1>Решите уравнения:</h1>
        <Form 
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* вставляем уравнения */}
              {equations.map((equation, index) => (<EquationForm key={'equationForm'+index.toString()} equation={equation} id={index.toString()} value={statesOfAswers[index]}/>))}
              <br />
              <button type="submit" className="btn btn-outline-dark btn-sm ms-2">OK</button>
            </form>
          )}
        />
      </div>
      </div>
  );
}

export default App

{/*           <div className='d-inline-flex align-items-center'>
                <span className='display-6 me-2'>2</span>
                <span className='display-6 me-2'>+</span>
                <Field className="me-2" name="answerField" component={'input'} placeholder="X" style={{ width: "30px" }} />
                <span className='display-6 me-2'>=</span>
                <span className='display-6 me-2'>6</span>
                <span className='display-6 me-2' style={{visibility: serverRes? 'visible':'hidden'}}>"Верный ответ!!"</span>
              </div> */}