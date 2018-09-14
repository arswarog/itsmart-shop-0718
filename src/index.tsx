import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import { combined } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { fillCat } from './actions/catalog';

const store = createStore(combined, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();



async function request() {
  const response = await fetch('/api/cats');
  const body = await response.json();
  /* tslint:disable */
  // store.dispatch({
  //   categories: body,
  //   type: ActionType.fillCat,
  // });
  store.dispatch(fillCat(body));

}


request();

