import React, { useState } from "react";

//import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import EmailText from "../components/Quill";

const MyApp = ({emails}) => {
  //console.log(emails)
  const [unchosenEmails, setUnchosenEmails] = useState(emails);
  const [emailBody, setEmailBody] = useState("");
  const [toEmails, setToEmails] = useState([]);
  const [ccEmails, setCcEmails] = useState([]);
  const [bccEmails, setBccEmails] = useState([]);
  window.getEmailText = function() {
    FileMaker.PerformScript("receiveEmailText",emailBody)
};
  return (
    <div id='dom' className='px-4 py-5 bg-white'>
      <div id='emailDom'>
        <EmailInput id='toEmail' title='TO' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={toEmails} setChosenEmails={setToEmails}/>
        <EmailInput id='ccEmail' title='CC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={ccEmails} setChosenEmails={setCcEmails}/>
        <EmailInput id='bccEmail' title='BCC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={bccEmails} setChosenEmails={setBccEmails}/>
      </div>
      <div id='textDom'>
        <EmailText emailBody={emailBody} setEmailBody={setEmailBody}/>
      </div>
    </div>
  );
};

export default MyApp;
