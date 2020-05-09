import React from 'react';
import {connect} from 'react-redux';

const { Component } = React;

class Results extends Component {
  render() {
    const entries = this.props.search.results.map(entry =>
      <tr>
        <td>{entry.name}<br />({entry.alias})</td>
        <td className='center'>{entry.rating}</td>
        <td className='center'>{entry.review_count}</td>
        <td className='center'>{entry.price}</td>
        <td className='center'>{entry.distance.toFixed(0)}</td>
        <td>{entry.location.address1}<br />{entry.location.city}, {entry.location.state}<br />{entry.display_phone }</td>
      </tr>
    );
    return (
      <div id='content' className='container'>
        <div className='content-title'>
          <h1 className='col-12'>Results</h1>
        </div>
        <div id='content-section' className='row'>
          <div id='content-block' className='col-12'>
            <table>
              <thead>
              <tr>
                <th>Name(ID)</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Price</th>
                <th>Distance(m)</th>
                <th>Contact</th>
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
    search: state.search
  };
};

export default connect(MapStateToProps)(Results);
