import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import { ImageDrop } from 'quill-image-drop-module';
//import { ImageResize } from 'quill-image-resize-module';

//Quill.register('modules/imageDrop', ImageDrop);
//Quill.register('modules/imageResize', ImageResize);

export default function EmailText({emailBody,setEmailBody}) {

    useEffect(() => {
        const Font = ReactQuill.Quill.import('formats/font');
        Font.whitelist = ['roboto', 'open-sans', 'lato', 'oswald', 'slabo-27px', 'source-sans-pro', 'montserrat', 'raleway', 'pt-sans', 'ubuntu', 'droid-sans', 'merriweather', 'noto-sans', 'arimo', 'pt-serif', 'droid-serif', 'lora', 'vollkorn', 'tinos'];
        ReactQuill.Quill.register(Font, true);
    }, []);

    const modules = {
        toolbar: [ 
            [{ 'font': ['roboto', 'open-sans', 'lato', 'oswald', 'slabo-27px', 'source-sans-pro', 'montserrat', 'raleway', 'pt-sans', 'ubuntu', 'droid-sans', 'merriweather', 'noto-sans', 'arimo', 'pt-serif', 'droid-serif', 'lora', 'vollkorn', 'tinos'] }],
            [{ 'size': ['small', false, 'large', 'huge'] }], 
            [{ 'header': [1, 2, 3] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image']
        ],
        //imageDrop: true,
        /*
        ImageResize: {
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
        },*/

    };
    return <ReactQuill style={{ height: "65vh" }} theme="snow" className="mt-1 rounded-md" value={emailBody} onChange={setEmailBody} modules={modules}/>;
}