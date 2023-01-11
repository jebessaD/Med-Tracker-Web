import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackbarProvider} from 'notistack';
import { Provider } from 'react-redux';
import store from './state/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
