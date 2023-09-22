import MyApp from "./myApp";
import React from "react";
import { createRoot } from "react-dom/client";

window.loadEmails=(json) => {
    try {
        console.log("Received JSON:", json); // For debugging
        const data = JSON.parse(json);
        console.log("parsed JSON:", data);
        const emails = data.emails || [];
        const toEmails = data.toEmails || [];
        const ccEmails = data.ccEmails || [];
        const bccEmails = data.bccEmails || [];
        console.log("Emails:", emails, "toEmails:", toEmails, "ccEmails", ccEmails);
    
        const container = document.getElementById("root");
        const root = createRoot(container);
        root.render(<MyApp emails={emails} initToEmails={toEmails} initCcEmails={ccEmails} initBccEmails={bccEmails}/>);
    
    } catch (error) {
        console.error("Failed to parse JSON:", error);
    }
};