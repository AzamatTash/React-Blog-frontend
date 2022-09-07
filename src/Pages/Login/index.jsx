import React from 'react';
import classes from './login.module.sass';
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

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
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={classes.form} >
                    <h1 className={classes.title}>Вход</h1>
                    <div className={classes.group}>
                        <Field className={classes.input} type='email' name='email' component='input' placeholder=' '/>
                        <label htmlFor='email' className={classes.label}>Email</label>
                    </div>
                    <div className={classes.group}>
                        <Field type='text' name='password' component='input' className={classes.input} placeholder=' '/>
                        <label htmlFor='password' className={classes.label}>Пароль</label>
                    </div>
                    <button type='submit' className={classes.btn__login}>Войти</button>
                    <Link to='/register'>
                        <button className={classes.btn__register}>Зарегистрироваться</button>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;