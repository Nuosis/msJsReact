import React, { useState } from "react";

import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
const text = [
  "This is the button to press",
  "Second one",
  "Third One",
  "Fourth one",
  "fith one",
  "sixth one",
  "seventh one",
  "eighth one",
];
const MyApp = () => {
  const [btn, setBtn] = useState("");
  return (
    <div id='emailDom' className='px-4 py-5 bg-slate-200' >
      <EmailInput title='TO'/>
      <EmailInput title='CC'/>
      <EmailInput title='BCC'/>
      <h1 className="px-5 text-4xl text-purple-600">{btn}</h1>
    </div>
  );
};

export default MyApp;
