import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const initialState = {
  loggedIn: true,
  food: ""
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "LOGIN":
    return {
      loggedIn: true
    };
    case "SIGNIN":
      return {
        loggedIn: true
      };
      case "LOGOUT":
        return {
          loggedIn: false
        };
      case 'IMAGE_REQUEST':
        return {
          ...state,
          food: ""
      }
      case 'ADD_IMAGE':
          return{
              ...state,
              food: `copy & paste this link to see some food: ${JSON.stringify(action.foodpic)}`
          }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

  ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
         <App /> 
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
