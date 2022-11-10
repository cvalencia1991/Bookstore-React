import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/cofigureStore';
import { getbook } from './redux/books/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getbook());
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
