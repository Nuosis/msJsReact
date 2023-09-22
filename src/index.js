import MyApp from "./myApp";
import React from "react";
import { createRoot } from "react-dom/client";

// this is where/how filemaker sets the input
window.loadEmails=(json) => {
    const emails = JSON.parse(json)
    //console.log("index", emails)
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<MyApp emails={emails} title="Title Block"/>);
}
