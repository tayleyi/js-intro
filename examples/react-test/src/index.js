import React from 'react';
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./styles.css";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<App />);