import React from "react";
import {useState} from "react";
import {Field} from 'react-final-form'

export const ImputAnswer = () =>{
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState(false);

    const validateValue = (e:any) => {
        setValue(e.target.value)
        if(!/^\d+$/.test(value) && value!=''){
            setValueError(false)
        }else{
            setValueError(true)
        }
    }

    const valueHandler = (e:any) => {
        if(!valueError){
            console.log(e.target.value)
        }
        
    }
    return(
        <Field name = 'imputField'>{
            props =>(
            <input style={{color: !valueError? 'red':'black'}}  value={value} onChange={e => validateValue(e)} onBlur={e => valueHandler(e)} name='value' type="text" className="form-control" placeholder="Введите число"/>
            )}
        </Field>
        );

}

{/* <input style={{color: !valueError? 'red':'black'}}  value={value} onChange={e => validateValue(e)} onBlur={e => valueHandler(e)} name='value' type="text" className="form-control" placeholder="Введите число"/> */}

