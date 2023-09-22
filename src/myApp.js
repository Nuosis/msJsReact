import React, { useState } from "react";

//import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import EmailText from "../components/Quill";
import Subject from "../components/Subject";

const MyApp = ({emails,initToEmails,initCcEmails,initBccEmails}) => {
  //console.log('myAppEmailProps', emails, initToEmails, initCcEmails, initBccEmails)
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
    const toEmailsObj = toEmails.map(email => ({ Email: email }));
    const ccEmailsObj = ccEmails.map(email => ({ Email: email }));
    const bccEmailsObj = bccEmails.map(email => ({ Email: email }));
    const emailComponents = {
      emailBody,
      subjectBody,
      toEmails: toEmailsObj,
      ccEmails: ccEmailsObj,
      bccEmails: bccEmailsObj
    };
    
    FileMaker.PerformScript("receiveEmailText", JSON.stringify(emailComponents));
  };

  window.clearEmails = (input) => {
    const data = JSON.parse(input);
    const type = data.type;
    let setEmail;
    switch (type) {
      case "to":
        setEmail = setToEmails;
        break;
      case "cc":
        setEmail = setCcEmails;
        break;
      case "bcc":
        setEmail = setBccEmails;
        break;
      default:
        console.log("Hit default case. Unexpected type:", type);
        return;
    }
    setEmail([]);  // Reset to an empty array
  };
  

  window.addEmail = (json) => {
    const data = JSON.parse(json);
    const type = data.type;
    const newEmail = data.newEmail;
    console.log("type: ", type, "newEmail: ", newEmail)
    let setEmail;
    switch (type) {
      case "to":
        setEmail = setToEmails;
        break;
      case "cc":
        setEmail = setCcEmails;
        break;
      case "bcc":
        setEmail = setBccEmails;
        break;
      default:
        return;
    }
    setEmail(prevEmails => [...prevEmails, newEmail]);
  };
  
  ``
  
  
/*
  // Log the subjectBody state whenever it changes
  React.useEffect(() => {
    console.log("State:", { emailBody, subjectBody, toEmails, ccEmails, bccEmails });
  }, [emailBody, subjectBody, toEmails, ccEmails, bccEmails]);
  */
  return (
    <div id='dom' className='px-4 py-5 bg-white'>
      <div id='emailDom'>
        <EmailInput id='toEmail' title='TO' addEmail={addEmail} unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={toEmails} setChosenEmails={setToEmails}/>
        <EmailInput id='ccEmail' title='CC' addEmail={addEmail} unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={ccEmails} setChosenEmails={setCcEmails}/>
        <EmailInput id='bccEmail' title='BCC' addEmail={addEmail} unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails} chosenEmails={bccEmails} setChosenEmails={setBccEmails}/>
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
