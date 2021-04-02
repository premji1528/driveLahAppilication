import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import AppStore from './Store';
import WebRouter from './Router';
import './App.css';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
const RouteApp = connect(mapStateToProps, mapDispatchToProps)(WebRouter);

class App extends Component {
  render() {
    return <Provider store={AppStore}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>
  }
}
export default App;