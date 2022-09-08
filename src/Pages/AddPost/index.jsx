import React from 'react';
import classes from './addPost.module.sass';
import Editor from "../../components/Editor/Editor";
import {Field, Form, Formik} from "formik";

const AddPost = () => {
    const [text, setText] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState(' ');
    const inputFileRef = React.useRef(null);
    const initialValues = {
        title: '',
        tags: ''
    }

    const onChange = (value) => {
        setText(value)
    };

    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData();
            const file = e.target.file[0];
            formData.append('image', file);
            // const {data} = await axios.post('/upload', formData);
            // setImageUrl(data.url);
        } catch (err) {
            alert('Ошибак при загрузке каринки')
        }
    };

    const onClickRemoveImage = () => {
        setImageUrl('');
    };

    const onSubmit = values => {
        console.log(`${values.title}, ${values.tags}, ${text}`)
    };

    return (
        <div className={classes.wrapper}>
            <button type='submit' className={classes.btn} onClick={() => inputFileRef.current.click()}>
                + Добавить превью
            </button>
            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <>
                    <button className={classes.btn__del} onClick={onClickRemoveImage}>
                        Удалить
                    </button>
                    <img className={classes.image} src={'https://cdn.nur.kz/images/1120/daedc6636b82c2f6.jpeg' || `http://localhost:4444${imageUrl}`} alt="Uploaded" />
                </>
            )}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='title'
                               component='input' placeholder=' '/>
                        <label htmlFor='title' className={classes.label}>Заголовок</label>
                    </div>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='tags'
                               component='input' placeholder=' '/>
                        <label htmlFor='tags' className={classes.label}>Теги</label>
                    </div>
                    <Editor onChange={onChange}/>
                    <button type='submit' className={classes.btn}>Опубликовать</button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddPost;