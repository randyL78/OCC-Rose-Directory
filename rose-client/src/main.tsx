import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {CssBaseline, ThemeProvider} from "@mui/material";

import theme from "./styles/theme.ts";
import App from "./App.tsx";
import {Provider} from "react-redux";
import store from "./store";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
