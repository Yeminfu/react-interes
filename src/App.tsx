import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Field } from 'react-final-form';
// import axios from 'axios';
import { DevJunTest } from './components/dev-jun-test/dev-jun-test';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>{'>'}o_O{'<'}</div>,
  },
  {
    path: "/bunker",
    element: <h3>When you have me, you feel like sharing me. <br /> If you do share me, you don't have me. <br /> What am I?</h3>,
  },
]);

function App() {
  // const onSubmit = (e: any) => {
  //   axios({
  //     method: 'post',
  //     url: '/?service=t_1',
  //     data: {
  //       a: e.answerField
  //     }
  //   });
  // };
  return (
    <div>
      <div className="container"><RouterProvider router={router} /></div>
      {/* <DevJunTest /> */}
      {/* <header style={{ height: 100 }}></header>
      <div className="container">
        <h1>Решите уравнение</h1>
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
      </div> */}
    </div>
  );
}

export default App