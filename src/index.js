import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import UserContextProvider from './Component/Context/Usercontext';
import { QueryClient, QueryClientProvider } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));
let x=new QueryClient();


root.render(
<QueryClientProvider client={x}>
  <UserContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserContextProvider>
  </QueryClientProvider>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
