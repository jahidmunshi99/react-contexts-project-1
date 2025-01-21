import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import Index from './routes/Index'
const root = document.getElementById('root');


ReactDOM.createRoot(root).render(
  <StrictMode>
    <Index/>
  </StrictMode>,
)
