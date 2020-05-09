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
                <td>Input Value</td>
                <td>Given value in the original (input) units.</td>
              </tr>
              <tr>
                <td>Input Units</td>
                <td>
                  Units of the input original (input) value provided.<br />
                  Temperature:  k=Kelvin, r=Rankine, c=Celsis, f=Farenhieght<br />
                  Volume: l=liters, g=gallons, t=tablespoons, p=cups, i=cubic-inches, e=cubic-feet
                </td>
              </tr>
              <tr>
                <td>Ouput Units</td>
                <td>Target or output units to which input is converted.</td>
              </tr>
              <tr>
                <td>Ouput Value</td>
                <td>Target or output converted value (actual answer).</td>
              </tr>
              <tr>
                <td>Student</td>
                <td>Student answer for the ouput (conveted) value.</td>
              </tr>
              <tr>
                <td>Error</td>
                <td>Absolute value of difference between actual ouput and student value.</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>Correct, incorrect, or invalid (if converting between temperature and volume).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Faq;
