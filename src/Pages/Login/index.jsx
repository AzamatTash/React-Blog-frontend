import React from 'react';
import classes from './login.module.sass';
import {Navigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Form, Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import {validationForm} from '../../utils/validationForm';
import FieldEmail from '../../components/Form/FieldEmail';
import FieldPassword from '../../components/Form/FieldPassword';
import {fetchAuth} from '../../redux/slices/auth';

const Login = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.auth)
    const isNotAuth = data === null;

    const initialValues = {
        email: 'Anna@mail.ru',
        password: 'Anna56'
    };

    const onSubmit = async (values) => {
        try {
            const {payload} = await dispatch(fetchAuth(values));
            if('token' in payload) return  window.localStorage.setItem('token', payload.token);
        } catch (err) {
            alert('Не удалось авторизоваться');
        }
    };

    if(!isNotAuth) return <Navigate to='/'/>

    return (
        <div className={classes.wrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}
                    validationSchema={validationForm.email && validationForm.password}>
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