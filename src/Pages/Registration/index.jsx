import React from 'react';
import classes from "../Login/login.module.sass";
import {Form, Formik} from "formik";

import {validationForm} from "../../utils/validationForm";
import FieldEmail from "../../components/Form/FieldEmail";
import FieldPassword from "../../components/Form/FieldPassword";
import FieldName from "../../components/Form/FieldName";

const Register = () => {
    const initialValues = {
        name:'',
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