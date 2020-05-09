import React from 'react';

function Faq() {
  return (
    <div id='content' className='container'>
      <div className='content-title'>
          <h1 className='col-12'>FAQs</h1>
      </div>
      <div id='content-section' className='row'>
        <div id='content-block' className='col-12'>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Term</td>
                <td>Yelp category (e.g., Ice Cream).</td>
              </tr>
              <tr>
                <td>Locatoin</td>
                <td>Lowercase city, state.</td>
              </tr>
              <tr>
                <td>Numbewr</td>
                <td>Number of returned results.</td>
              </tr>
              <tr>
                <td>Method</td>
                <td>Search/sorting method (e.g., rating).</td>
              </tr>
              <tr>
                <td>Results</td>
                <td>Ranked search results.</td>
              </tr>
              <tr>
                <td>Review</td>
                <td>Enter the alias (ID) for a result to set a review.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Faq;
