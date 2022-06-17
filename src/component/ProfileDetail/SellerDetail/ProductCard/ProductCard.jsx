import React from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

import './ProductCard.css'

export default function ProductCard({ vegetableDetail, vegetableName, sortOrder }) {
    let { computed: { highestAvgPriceVarietyGrade }, marketType, loclevel3Name, marketStdName, rawReportPriceUnit, loclevel2ShortName, updatedAt } = vegetableDetail[0]
    let { maxPrice, minPrice } = highestAvgPriceVarietyGrade
    let updateDateArray = updatedAt.slice(0, 10).split('-')
    let updateDate = updateDateArray.reverse().join('/')



    return (
        <div className='card-container'>
            <div className='card-product'>
                <div className='card-image'>
                    <img src='' alt='' />
                </div>
                <div className='card-detail'>
                    <div className='card-detail__header'>
                        <h3>{vegetableName} {marketType} Rates</h3>
                        <Link to={`/report/${sortOrder}`} className='card-moreDetail' >
                            <MoreVertIcon />
                        </Link>
                    </div>
                    <div><p className='card-detail__sellerDetail'>{marketStdName}, {loclevel3Name},{loclevel2ShortName}</p>
                        <p >{updateDate}</p></div>
                    <div className='card-detail__priceDetail'>
                        <h3><CurrencyRupeeIcon className='rupeeIcon' /> {maxPrice}-{minPrice}/1 {rawReportPriceUnit}</h3>
                        <p className='time-text'>update At 10:37 AM</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='card-button'>
                <Button className="card-button__btn share-btn" variant="contained">
                    <ShareIcon />Share
                </Button>
                <Button className="card-button__btn interest-btn" variant="contained">
                    <SendIcon /> Interested
                </Button>
            </div>
        </div>

    )
}
