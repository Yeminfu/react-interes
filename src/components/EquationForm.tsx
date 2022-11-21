import { Field } from 'react-final-form';
import { ImputAnswer } from './ImputAnswer';

export const EquationForm = (props:any) => {
  //разбиваем уравнение на х и текст
  const meltedEquation:string[] = props.equation.split(/(x)/).filter(String)

  return(
          <div className='d-inline-flex align-items-center' style={{display:'block'}}>
            {/* нумерация */}
            <span className='display-6 me-2'>{Number(props.id)+1}) </span>
            {/* генератор формы(если х - Field, если текст - span) */}
            {meltedEquation.map(pieceOfEquation => (
             pieceOfEquation==='x'?
             <Field name={'fieldAnswer'+props.id} component={ImputAnswer} placeholder="X" style={{ width: "30px" }}/>:
             <span className='display-6 me-2'>{pieceOfEquation}</span> 
             ))}
            {/* верно ли? */}
            <span className='display-6 me-2' style={{visibility: props.value? 'visible':'hidden', color:'green'}}>   Верно!!!</span>
          </div>

          // <div className='d-inline-flex align-items-center'> 
          //   <span className='display-6 me-2'>2</span>
          //   <span className='display-6 me-2'>+</span>
          //   <Field name={props.equation} component={ImputAnswer} placeholder="X" style={{ width: "30px" }} />
          //   <span className='display-6 me-2'>=</span>
          //   <span className='display-6 me-2'>6</span>
          //   <span className='display-6 me-2' style={{visibility: serverRes? 'visible':'hidden'}}>equation-{props.equation}</span>
          // </div>
  )
}