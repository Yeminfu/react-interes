import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Field, useForm} from 'react-final-form';
import {ImputAnswer} from './components/ImputAnswer';
import axios from 'axios';

function App() {
  const onSubmit = (e:any) => {
    axios({
      method: 'post',
      url: '/?service=t_1',
      data: {
        a:e.answerField
      }
    });
    };

  


  return (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <form  onSubmit={handleSubmit}>
            <div className='d-inline-flex form-group'>
              <span>2</span>
              <span>+</span>
              {/* <ImputAnswer/> */}
              <Field name="answerField" component={ImputAnswer} placeholder="answer" /> 
              <span>=</span>
              <span >6</span>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        )}
      />
  );
}

export default App