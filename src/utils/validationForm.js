import * as Yup from 'yup';

export const validationForm = Yup.object().shape({
    email: Yup.string().email('Не верный формат email').required('Введите email'),
    password: Yup.string().required('Введите пароль').min(5, 'пароль не меньше 5 символов'),
    name: Yup.string().required('Введите имя').min(3, 'имя не меньше 3 символов')
});