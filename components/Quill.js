import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EmailText({emailBody,setEmailBody}) {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    };
    return <ReactQuill style={{ height: "100vh" }} theme="snow" value={emailBody} onChange={setEmailBody} modules={modules}/>;
}

export default EmailText