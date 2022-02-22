import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


const root = document.querySelector('#root')
if(root){
  ReactDom.render(<App />, root)
}
