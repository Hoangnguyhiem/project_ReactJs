import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import "./dashboard.css"

import "./assets/css/base.css"
import "./assets/css/grid.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
