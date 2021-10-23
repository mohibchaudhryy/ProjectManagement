import React from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

const Editor = ({pDescription, setpDescription}) => {
    return (
        <div className='editor'>
            <CKEditor
                editor={ClassicEditor}
                data={pDescription}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setpDescription(data)
                }}
                />  
        </div>
    )
}

export default Editor;