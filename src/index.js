import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Countries from "./pages/Countries";
import Country from "./pages/Country"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Countries />}/>
          <Route path="/country/:name" element={<Country />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
