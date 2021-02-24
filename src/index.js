import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux'; //Provider component to access children in store.
import * as serviceWorker from './serviceWorker';
import theme from './themes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

//The <Provider> component uses the redux store to use it's reducer functions when needed.
