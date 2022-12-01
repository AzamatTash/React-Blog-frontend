import React from 'react';
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css';
import classes from './editor.module.sass';

const Editor = ({onChange, value}) => {
    const defaultOptions = React.useMemo(() => ({
            spellChecker: false,
            status: false,
            toolbarTips: true,
            placeholder: 'Введите текст...',
            shortcuts: { toggleFullScreen: null, toggleSideBySide: null },
            hideIcons: ['quote', 'side-by-side', 'fullscreen'],
        }),
        []
    );

    return (
        <SimpleMDE
            value={value}
            onChange={onChange}
            className={classes.editor}
            options={defaultOptions}
        />
    );
};

export default Editor;