import MyApp from "./myApp";
import React from "react";
import { createRoot } from "react-dom/client";
const emails = [
    "mspsi@me.com",
    "me@us.org",
    "swift@you.com",
    "sing@me.ca",
    "mary@why.io"
];
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyApp emails={emails} title="Title Block"/>);
