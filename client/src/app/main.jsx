import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import { MantineProvider } from "@mantine/core"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
