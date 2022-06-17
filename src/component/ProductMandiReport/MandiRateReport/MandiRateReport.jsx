import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './MandiRateReport.css'

export default function MandiRateReport({ mandiReport }) {


  let { priceDetails } = mandiReport[0].posts[0]
  let newData
  const HandleRatesData = () => {
    newData = priceDetails.map((item) => {
      let data = [item.varietyName, item.minPrice, item.maxPrice, item.gradeName]
      return data
    })
  }
  HandleRatesData()

  return (
    <div className='mandiRateReport'>
      <div className='rateReport-header'>
        <h4 className='rateReport_text'>Rates</h4>
        <span><CurrencyRupeeIcon /></span>
      </div>
      <hr style={{ backgroundColor: 'rgb(11, 163, 11)', height: '1px' }} />
      {newData.map((item, index) =>
        <div className='rateReport-detail' key={index}>
          <hr />
          <div className="rateReport-row">
            <h4 className='rateReport_text'>{item[0]} {item[3] && `(${item[3]})`}</h4>
            <h4>{item[1]} -{item[2]}</h4>
          </div>
        </div>
      )}

      <p style={{ fontSize: '0.7rem', padding: '2px', fontStyle: 'italic' }}>Rates are in ₹/1 Kg and exclude mandi commission and tax</p>
    </div>
  )
}
