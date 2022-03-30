import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailPage from './Components/Detail Episode/detailEpisode';
import EpisodeInfo from './Components/Episodes/episode';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './Store/index'

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/episodes" element={< DetailPage/>}>
        <Route path='/episodes/:id' element={<DetailPage/>}/>
      </Route>  
      <Route path='*' element={
        <h1>Page is not found</h1>
      }/>
    </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
