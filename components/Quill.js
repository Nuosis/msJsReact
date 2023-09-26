import ReactQuill, { Quill } from 'react-quill';
//import { ImageDrop } from 'quill-image-drop-module';
//import { ImageResize } from 'quill-image-resize-module';
import React, { useEffect, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

//Quill.register('modules/imageDrop', ImageDrop);
//Quill.register('modules/imageResize', ImageResize);

export default function EmailText({emailBody,setEmailBody, setQuillEditor}) {

    const quillRef = useRef(null); 

    useEffect(() => {
        const Font = ReactQuill.Quill.import('formats/font');
        // console.log('fonts', Font)
        Font.whitelist = ['roboto', 'open-sans', 'lato', 'oswald', 'slabo-27px', 'source-sans-pro', 'montserrat', 'raleway', 'pt-sans', 'ubuntu', 'droid-sans', 'merriweather', 'noto-sans', 'arimo', 'pt-serif', 'droid-serif', 'lora', 'vollkorn', 'tinos'];
        ReactQuill.Quill.register(Font, true);
    }, []);

    useEffect(() => {
        if (quillRef.current) {
            setQuillEditor(quillRef.current.getEditor());
        }
    }, [quillRef, setQuillEditor]);

    const modules = {
        toolbar: [ 
            [{ 'font': ['roboto', 'open-sans', 'lato', 'oswald', 'slabo-27px', 'source-sans-pro', 'montserrat', 'raleway', 'pt-sans', 'ubuntu', 'droid-sans', 'merriweather', 'noto-sans', 'arimo', 'pt-serif', 'droid-serif', 'lora', 'vollkorn', 'tinos'] }],
            [{ 'size': ['small', false, 'large', 'huge'] }], 
            [{ 'header': [1, 2, 3] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ["blockquote", "code-block"],
        ],
        /*
        clipboard: {
            matchVisual: false,
            matchers: [
                ['style', (node, delta) => {
                return delta; // here you can manipulate delta if needed
                }],
            ]
        }
        //imageDrop: true,
        /*
        ImageResize: {
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
        },*/

    };
    console.log('Quill email html', emailBody)
    return <ReactQuill style={{ height: "65vh" }} theme="snow" className="mt-1 rounded-md" value={emailBody} onChange={setEmailBody} modules={modules} ref={quillRef}/>;
}