import React from 'react';
import classes from './field.module.sass';
import {ErrorMessage, Field} from 'formik';

const FieldName = () => {
    return (
        <div className={classes.group}>
            <Field type='text' name='fullName' component='input' className={classes.input} placeholder=''/>
            <label htmlFor='fullName' className={classes.label}>Имя</label>
            <ErrorMessage name='fullName' component='div' className={classes.errors}/>
        </div>
    );
};

export default FieldName;