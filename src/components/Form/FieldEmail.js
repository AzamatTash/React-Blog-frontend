import React from 'react';
import classes from './field.module.sass';
import {ErrorMessage, Field} from 'formik';

const FieldEmail = () => {
    return (
        <div className={classes.group}>
            <Field className={classes.input} type='email' name='email' component='input' placeholder=''/>
            <label htmlFor='email' className={classes.label}>Email</label>
            <ErrorMessage name='email' component='div' className={classes.errors}/>
        </div>
    );
};

export default FieldEmail;