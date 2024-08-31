import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
// import "@mantine/notifications/styles.css";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
    </Provider>
  </StrictMode>,
)
