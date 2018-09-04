import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { ActionType } from './common/actions';
import './index.css';
import { combined } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combined, {
  catalog: {}
});

const catalog = {name: 'asdasd'};

store.dispatch({
  catalog,
  type: ActionType.init,
}) 



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
