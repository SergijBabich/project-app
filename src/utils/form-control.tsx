import React from 'react';
import s from './form-control.module.css';
import { Field } from 'redux-form';

interface FieldProps {
   input: React.HTMLProps<Input>,
   meta: boolean
}


const FormControl = ({meta,...props}: FieldProps) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.form_control+' '+ (hasError? s.error: '')}>
      <div>
        {props.children}
      </div>
      <div>
        { hasError && <span className={s.error}>{meta.error}</span>}
      </div>
    </div>
  );
};


export const Input = (props:FieldProps) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>;
};
export const Textarea = (props: FieldProps) => {
  const {input, child,...restProps} = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>;
};
export const File = (props: FieldProps) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>;
};

export const createField = (name: string, placeholder: string, component: string, type: string) => {
  return (
    <Field name={name}
      placeholder={placeholder}
      component={component}
      type={type} />
  );
};