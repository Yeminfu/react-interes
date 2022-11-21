import { Field } from 'react-final-form'

export const ImputAnswer = (props: any) => {
    return (
        <Field name={props.input.name}
            validate={value => {
                if (!/^\d+$/.test(value) || value === '') return 'Required';
                return undefined;
            }}
        >{
                props => (
                    <input
                        style={{ color: props.meta.error ? 'red' : 'black', width:'30px' }}
                        {...props.input}
                        type="text" className="me-2" placeholder="x" />
                )}
        </Field>
    );
}
