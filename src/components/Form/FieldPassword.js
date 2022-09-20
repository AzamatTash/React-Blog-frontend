import React from 'react';
import classes from "./field.module.sass";
import {ErrorMessage, Field} from "formik";

const FieldPassword = () => {
    return (
        <div className={classes.group}>
            <Field type='password' name='password' component='input' className={classes.input} placeholder=' '/>
            <label htmlFor='password' className={classes.label}>Пароль</label>
            <ErrorMessage name='password' component='div' className={classes.errors}/>
        </div>
    );
};

export default FieldPassword;