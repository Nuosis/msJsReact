import MyApp from "./myApp";
import React from "react";
import { createRoot } from "react-dom/client";

window.loadEmails = (json = "{}") => { // Set a default value for json
    console.log("loadEmails Called")
    let data;
    try {
        data = JSON.parse(json);
        console.log("Received JSON:", json); // For debugging
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        data = {}; // Ensure data is an object even if JSON parsing fails
    }

    // Extract data with fallbacks to ensure no errors on undefined values
    const emails = data.emails || [];
    const toEmails = data.toEmails || [];
    const ccEmails = data.ccEmails || [];
    const bccEmails = data.bccEmails || [];
    const fromEmails = data.fromEmails || [];
    const emailHTML = data.HTML || "";
    console.log("index emailHTML", emailHTML);

    // Render the component with the extracted or default data
    const container = document.getElementById("root");
    if (!container) {
        console.error("Root container not found");
        return; // Exit if the root container does not exist
    }
    const root = createRoot(container);
    root.render(
        <MyApp 
            emails={emails} 
            initToEmails={toEmails} 
            initCcEmails={ccEmails} 
            initBccEmails={bccEmails} 
            initEmailHTML={emailHTML}
            initFromEmails={fromEmails}
        />
    );
};

loadEmails()