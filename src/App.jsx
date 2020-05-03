import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from "./ducks";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import CountryContainer from "./containers/CountryContainer";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from './epics';
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )
);
epicMiddleware.run(rootEpic);

const App = () => {
  return (
    <Provider store={store}>
      <CountryContainer/>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
