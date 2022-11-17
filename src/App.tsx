import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Field} from 'react-final-form';
import {ImputAnswer} from './components/ImputAnswer';
import axios from 'axios';

function App() {
  
  const onSubmit = (value:number) => {
    axios({
      method: 'post',
      url: '/?service=t_1',
      data: {
        a:value
      }
    });
    };
  
  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
          <form className='d-inline-flex form-group' onSubmit={handleSubmit}>
            <span>2</span>
            <span>+</span>
            <Field name="ImputField" component={ImputAnswer} placeholder="answer" />
            <span>=</span>
            <span>6</span>
          </form>
      )}
    />
  );
}

export default App