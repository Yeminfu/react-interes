// import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Field } from 'react-final-form';
// import { ImputAnswer } from './components/ImputAnswer';
import axios from 'axios';

function App() {
  const onSubmit = (e: any) => {
    axios({
      method: 'post',
      url: '/?service=t_1',
      data: {
        a: e.answerField
      }
    });
  };

  return (
    <div>
      <header style={{ height: 100 }}></header>
      <div className="container">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className='d-inline-flex align-items-center'>
                <span className='display-6 me-2'>2</span>
                <span className='display-6 me-2'>+</span>
                <Field className="me-2" name="answerField" component={'input'} placeholder="X" style={{ width: "30px" }} />
                <span className='display-6 me-2'>=</span>
                <span className='display-6 me-2'>6</span>
                <button type="submit" className="btn btn-outline-dark btn-sm ms-2">OK</button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default App