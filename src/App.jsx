import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from "./ducks";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import CountryContainer from "./containers/CountryContainer";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <CountryContainer/>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
