import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Switch, Route, HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import Todo from './components/Todo';
import AddForm from './components/addForm/AddForm';
import Info from './components/info/Info';
import reducer from './redusers/index';
import './main.sass'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(createHashHistory(), store);

const Routing = () => {
  return (
    <Provider store={store} history={history}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Todo}/>
          <Route exact path='/addForm' component={AddForm}/>
          <Route exact path='/info/:id' component={Info}/>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

serviceWorker.unregister();