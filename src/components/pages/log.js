import React from 'react';
import {connect} from 'react-redux';

const { Component } = React;

class Log extends Component {
  render() {
    const entries = this.props.log.map(entry =>
      <tr>
        <td>{entry.term}</td>
        <td>{entry.location}</td>
        <td>{entry.number}</td>
        <td>{entry.method}</td>
        <td>{entry.result}</td>
      </tr>
    );
    return (
      <div id='content' className='container'>
        <div className='content-title'>
          <h1 className='col-12'>Search Log</h1>
        </div>
        <div id='content-section' className='row'>
          <div id='content-block' className='col-12'>
            <table>
              <thead>
              <tr>
                <th>Term</th>
                <th>Location</th>
                <th>Number</th>
                <th>Method</th>
                <th>Result</th>
              </tr>
              </thead>
              <tbody>
                { entries }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    log: state.log
  };
};

export default connect(MapStateToProps)(Log);
