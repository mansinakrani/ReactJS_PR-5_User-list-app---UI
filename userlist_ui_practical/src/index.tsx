import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*****ERROR :Uncaught Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider> {Web page data was not visible}
 SOLUTION : App must be wrapped in provider since you are using useDispatch in it. Right now it's just a child. Provider sets the context so only its children can have access to it, not a parent. 
 [https://stackoverflow.com/questions/60329421/usedispatch-error-could-not-find-react-redux-context-value-please-ensure-the]

 (1)maybe you imported Provider into the App.js file. Provider needs to be imported into the file index.js.
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
 (2) :- I did this on the same index.js file for a react-native app. This way you avoid having to export and add another file just for giving wrapping the App with the provider.

const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
 */