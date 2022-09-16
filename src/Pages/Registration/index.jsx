import React from 'react';
import classes from '../Login/login.module.sass';
import {Form, Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {validationForm} from '../../utils/validationForm';
import FieldEmail from '../../components/Form/FieldEmail';
import FieldPassword from '../../components/Form/FieldPassword';
import FieldName from '../../components/Form/FieldName';
import {fetchRegister} from '../../redux/slices/auth';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        fullName:'',
        email: '',
        password: ''
    };

    const onSubmit = async (values) => {
        try {
            const {payload} = await dispatch(fetchRegister(values));
            if('token' in payload) {
                window.localStorage.setItem('token', payload.token);
            }
            navigate('/');
        } catch (err) {
            alert('Не удалось зарегистрироваться');
        }
    };

    return (
        <div className={classes.wrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationForm}>
                {({status}) => (
                    <Form className={classes.form} >
                        <h1 className={classes.title}>Регистрация</h1>
                        <FieldName/>
                        <FieldEmail/>
                        <FieldPassword/>
                        <button type='submit' className={classes.btn__login}>Зарегистрироваться</button>
                        {status && status.error && <div className={classes.errors}>{status.error}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;