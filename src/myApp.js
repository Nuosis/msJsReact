import React, { useState } from "react";

//import Button from "../components/Button";
import EmailInput from "../components/EmailInput";

const MyApp = ({emails}) => {
  console.log(emails)
  const [unchosenEmails, setUnchosenEmails] = useState(emails);
  return (
    <div id='emailDom' className='px-4 py-5 bg-white' >
      <EmailInput id='toEmail' title='TO' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails}/>
      <EmailInput id='ccEmail' title='CC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails}/>
      <EmailInput id='bccEmail' title='BCC' unchosenEmails={unchosenEmails} setUnchosenEmails={setUnchosenEmails}/>
    </div>
  );
};

export default MyApp;
