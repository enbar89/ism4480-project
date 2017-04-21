import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import RootReducer from './reducers';
import Root from './containers/root/Root';

const store = createStore(() =>{});

class App extends Component
{
  render()
  {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
