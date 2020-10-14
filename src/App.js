import React from 'react';
import './App.css'

function App() {

  const json = [
    {
      _id: '5f746f892103e3371429dcd0',
      date: '2020-05-05T00:00:00.000Z',
      rates: {
        CAD: 1.5201,
        HKD: 8.4057,
        ISK: 159.3,
        PHP: 54.863,
        DKK: 7.4612,
        HUF: 350.27,
        CZK: 26.978,
        AUD: 1.6825,

      },
      __v: 0,
    },
    {
      _id: '5f746f892103e3371429dd6f',
      date: '2020-05-04T00:00:00.000Z',
      rates: {
        CAD: 1.539,
        HKD: 8.4838,
        ISK: 159.5,
        PHP: 55.379,
        DKK: 7.4622,
        HUF: 353.27,
        CZK: 27.119,
      },
      __v: 0,
    },
    {
      _id: '5f746f892103e3371429dd6f',
      date: '2020-05-04T00:00:00.000Z',
      rates: {
        CAD: 1.539,
        HKD: 8.4838,
        ISK: 159.5,
        PHP: 55.379,
        DKK: 7.4622,
        HUF: 353.27,
        CZK: 27.119,
      },
      __v: 0,
    },
    {
      _id: '5f746f892103e3371429dd6f',
      date: '2020-05-04T00:00:00.000Z',
      rates: {
        CAD: 1.539,
        HKD: 8.4838,
        ISK: 159.5,
        PHP: 55.379,
        DKK: 7.4622,
        HUF: 353.27,
        CZK: 27.119,
        AUD: 75.912,
        BLR: 2.345
      },
      __v: 0,
    },
    {
      _id: '5f746f892103e3371429dd6f',
      date: '2020-05-04T00:00:00.000Z',
      rates: {
        CAD: 1.539,
        HKD: 8.4838,
        ISK: 159.5,
        PHP: 55.379,
        DKK: 7.4622,
        HUF: 353.27,
        CZK: 27.119,
      },
      __v: 0,
    },
    {
      _id: '5f746f892103e3371429dd6f',
      date: '2020-05-04T00:00:00.000Z',
      rates: {
        CAD: 1.539,
        HKD: 8.4838,
        ISK: 159.5,
        PHP: 55.379,
        DKK: 7.4622,
        HUF: 353.27,
        CZK: 27.119,
      },
      __v: 0,
    },
  ];

  let allRates = []

  json.map(obj => {
    Object.keys(obj.rates).map(rate => {
      allRates.push(rate)
    })
  })

  allRates = [...new Set(allRates)]
  console.log(allRates)

  return (
    <div className="App">
      <table>
        <tr>
          <th>
            Date
          </th>
          {allRates.map(rate => (
            <th>
              {rate}
            </th>
          ))}
        </tr>
        {json.map(obj => (
          <tr>
            <td>{obj.date}</td>
            {allRates.map(rate => (
              // <td>{obj.rates[rate] != undefined ? obj.rates[rate] : <div>NA</div>}</td>
              <td >{obj.rates[rate]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
