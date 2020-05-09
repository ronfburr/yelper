import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {
  updateReviewTerm,
  fetchReviewData
} from '../../store/actions/updateReview';

const { Component } = React;

class Review extends Component {
  componentDidMount() {
    this.props.fetchReviewData(this.props.review.term);
  }
  handleFetchData = () => {
    const { fetchReviewData } = this.props;
    fetchReviewData(this.props.review.term)
  }
  handleReviewTerm = (e) => {
    const { updateReviewTerm } = this.props;
    updateReviewTerm(e.target.value)
  }
  render() {
    const entries = this.props.review.reviews.map(entry =>
      <tr>
        <td>{entry.user.name}</td>
        <td>{entry.rating}</td>
        <td>{entry.text}</td>
      </tr>
    );
    return (
      <div id='content'>
        <div className='content-title'>
          <h1>Reviews</h1>
        </div>
        <div id='content-section'>
          <table class='table-reviews'>
            <thead>
            <tr>
              <th >User</th>
              <th>Rating</th>
              <th>Comments</th>
            </tr>
            </thead>
            <tbody>
              { entries }
            </tbody>
          </table>
          <br />
          <br />
          <input type='text' value={ this.props.review.term } onChange={ this.handleReviewTerm } />
          <br />
          <br />
          <button onClick={this.handleFetchData}>Search</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    review: state.review
  };
};

const MapDispatchToProps = dispatch => bindActionCreators({
  updateReviewTerm,
  fetchReviewData
}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(Review);
