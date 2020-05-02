import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Page/Main.jsx';
import rootReducer from "./ducks";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
