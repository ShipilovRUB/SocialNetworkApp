import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: "Does somebody love me?", likesCount: 16 },
  { id: 2, message: "It's my first post", likesCount: 7 }
]

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Kristina" },
  { id: 3, name: "Sava" }
]

let messages = [
  { id: 1, text: "Hi" },
  { id: 2, text: "What is your name?" },
  { id: 3, text: "Yo" }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
