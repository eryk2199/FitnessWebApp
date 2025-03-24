import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import WeigthForm from './WeigthtForm.jsx'
import WeigthDashboard from './WeigthDashboard.jsx'
import Dashboard from './Dashboard.jsx'
import AppLayout from './AppLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App/>}/>
        <Route path="dashboard" element={<AppLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="weigth" element={<WeigthDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
