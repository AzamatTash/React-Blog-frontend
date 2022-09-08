import React from 'react';
import classes from './login.module.sass';
import {Link} from 'react-router-dom';
import {Formik, Form} from "formik";

import {validationForm} from '../../utils/validationForm';
import FieldEmail from '../../components/Form/FieldEmail';
import FieldPassword from '../../components/Form/FieldPassword';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <div className={classes.wrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationForm}>
                {({status}) => (
                    <Form className={classes.form} >
                        <h1 className={classes.title}>Вход</h1>
                        <FieldEmail/>
                        <FieldPassword/>
                        <button type='submit' className={classes.btn__login}>Войти</button>
                        {status && status.error && <div className={classes.errors}>{status.error}</div>}
                        <Link to='/register'>
                            <button className={classes.btn__register}>Зарегистрироваться</button>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;