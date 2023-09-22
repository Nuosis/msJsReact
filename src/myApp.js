import React, { useState } from "react";

//import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import EmailText from "../components/Quill";
import Subject from "../components/Subject";

const MyApp = ({emails,initToEmails,initCcEmails,initBccEmails}) => {
  console.log('myAppEmailProps', emails, initToEmails, initCcEmails, initBccEmails)
  const [unchosenEmails, setUnchosenEmails] = useState(emails);
  const [emailBody, setEmailBody] = useState("");
  const [subjectBody, setSubjectBody] = useState("");
  const [toEmails, setToEmails] = useState(initToEmails);
  const [ccEmails, setCcEmails] = useState(initCcEmails);
  const [bccEmails, setBccEmails] = useState(initBccEmails);

  /*
  window.getEmailText = function() {
    const emailComponents = {
      emailBody,
      subjectBody,
      toEmails,
      ccEmails,
      bccEmails
    };
    FileMaker.PerformScript("receiveEmailText",JSON.stringify(emailComponents))
  };*/
  window.getEmailText = function() {
    const toEmailsObj = toEmails.map(email => ({ Email }));
    const ccEmailsObj = ccEmails.map(email => ({ Email }));
    const bccEmailsObj = bccEmails.map(email => ({ Email }));
  
    const emailComponents = {
      emailBody,
      subjectBody,
      toEmails: toEmailsObj,
      ccEmails: ccEmailsObj,
      bccEmails: bccEmailsObj
    };
    
    FileMaker.PerformScript("receiveEmailText", JSON.stringify(emailComponents));
  };
  
/*
  // Log the subjectBody state whenever it changes
  React.useEffect(() => {
    console.log("State:", { emailBody, subjectBody, toEmails, ccEmails, bccEmails });
  }, [emailBody, subjectBody, toEmails, ccEmails, bccEmails]);
  */
  return (
    <div id='dom' className='px-4 py-5 bg-white'>
      <div id='emailDom'>
        <EmailInput id='toEmail' title='TO' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={toEmails} setChosenEmails={setToEmails}/>
        <EmailInput id='ccEmail' title='CC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={ccEmails} setChosenEmails={setCcEmails}/>
        <EmailInput id='bccEmail' title='BCC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={bccEmails} setChosenEmails={setBccEmails}/>
      </div>
      <div id='subjectDom'>
        <Subject title='' setSubjectBody={setSubjectBody} subjectBody={subjectBody} />
      </div>
      <div id='textDom'>
        <EmailText emailBody={emailBody} setEmailBody={setEmailBody}/>
      </div>
    </div>
  );
};

export default MyApp;
