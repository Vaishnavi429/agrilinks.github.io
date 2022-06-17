import React from 'react'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import './ArrivalReport.css'

export default function ArrivalReport() {
    return (
        <div className='arrivalReport'>
            <div className='arrivalReport-header'>
                <h4 className='report_text'>Arrival</h4>
                <span><AirportShuttleIcon /></span>
            </div>

            <hr style={{ backgroundColor: 'rgb(8, 8, 120)', height: '1px' }} />

            <div className="arrivalReport-fresh">
                <h4 className='report_text'>Fresh Arrival</h4>
                <h4>18000</h4>
            </div>
            
            <hr />
            <div className="arrivalReport-balance">
                <h4 className='report_text'>Balance Arrival</h4>
                <h4>2000</h4>
            </div>

            <p style={{ fontSize: '0.7rem', padding: '2px' }}>Arrivals are in Large Trucks. 1 Large Trucks = 20 Tons</p>


        </div>
    )
}
