import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './Components/reducer';

const appStore = createStore(reducer);

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
