import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import parse from 'html-react-parser';

import Header from './template/header';
import Nav from './template/nav';
import Footer from './template/footer';

import Results from './pages/results';
import Faq from './pages/faq';

import {
  updateTerm,
  updateLocation,
  updateNumber,
  updateMethod,
  fetchData
} from '../store/actions/updateSearch';

import { updateLog } from '../store/actions/updateLog';

const { Component } = React;

class App extends Component {
  componentDidMount() {
    this.props.fetchData(
      this.props.search.term,
      this.props.search.location,
      this.props.search.number,
      this.props.search.method
    );
  }
  handleFetchData = () => {
    const { fetchData } = this.props;
    fetchData(this.props.search.term,
      this.props.search.location,
      this.props.search.number,
      this.props.search.method
    )
  }
  handleTerm = (e) => {
    const { updateTerm } = this.props;
    updateTerm(e.target.value)
  }
  handleLocation = (e) => {
    const { updateLocation } = this.props;
    updateLocation(e.target.value)
  }
  handleNumber = (e) => {
    const { updateNumber } = this.props;
    updateNumber(e.target.value)
  }
  handleMethod = (e) => {
    const { updateMethod } = this.props;
    updateMethod(e.target.value)
  }
  handleUpdateLog = () => {
    const { updateLog } = this.props;
    updateLog(this.props.search)
  }
  render() {
    return (
      <Router>
        <Header />
        <Nav />
          <div id='content'>
          <div id='content-inner'>
            <div className='content-section'>
              <h1>Search Form</h1>
              <table className='table-search'>
                <thead>
                  <tr>
                    <th>Paramenter</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Term</td>
                    <td>
                      <input type='text' value={ this.props.search.term } onChange={ this.handleTerm } />
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                      <input type='text' value={ this.props.search.location } onChange={this.handleLocation } />
                    </td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td>
                      <input type='text' value={ this.props.search.number } onChange={ this.handleNumber } />
                    </td>
                  </tr>
                  <tr>
                    <td>Method</td>
                    <td>
                      <input type='text' value={ this.props.search.method } onChange={ this.handleMethod } />
                    </td>
                  </tr>
                  <tr>
                    <td>Result</td>
                    <td>{ parse( this.props.search.result ) }</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button onClick={this.handleFetchData}>Search</button>
              <br />
              <br />
              <br />
              <Switch>
                <Route exact path="/"><Results results={ this.props.search }/></Route>
                <Route path="/"><Faq /></Route>
              </Switch>
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    search: state.search,
    log: state.log
  };
};

const MapDispatchToProps = dispatch => bindActionCreators({
  updateTerm,
  updateLocation,
  updateNumber,
  updateMethod,
  fetchData,
  updateLog
}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(App);
