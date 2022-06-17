import React, { useEffect, useState } from 'react'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import MandiRateReport from './MandiRateReport/MandiRateReport';
import ArrivalReport from './ArrivalReport/ArrivalReport';
import { useParams } from 'react-router-dom';
import './ProductMandiReport.css'


export default function ProductMandiReport() {
    const [reportData, setReportData] = useState({})
    const [mandiReport, setMandiReport] = useState([])
    const [id, setId] = useState('')

    const sortOrderId = useParams()

    useEffect(() => {
        async function fetchDataServer() {
            let serverData = await fetch('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco')
            let objectData = await serverData.json()
            setReportData(objectData)
            setId(sortOrderId)
        }
        fetchDataServer()
    }, [])

    useEffect(() => {
        if (products) {
            let data = products.filter(item => item.sortOrder == id.sortOrder)
            mandiData(data)
        }

    }, [id])

    const mandiData = (data) => {
        setMandiReport(data)
    }

    let { name, loclevel3Name, loclevel2ShortName, products} = reportData
    return (
        <div className='productMandiReport'>
            <div className='productMandiReport-container'>
                <div className='productMandiReport-sellerDetail'>
                    <div className='sellerDetail__header'>
                        <div className='sellerDetail__headerImage'><PersonIcon /></div>
                        <div>
                            <div className='sellerDetail__HeaderText'>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{loclevel3Name} , {loclevel2ShortName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lineInBetween'></div>
                    <div className='sellerDetail__footer'>
                        <div className='sellerDetail__design'>
                            <h4>Yeshwanthapura Mandi {loclevel3Name}, {loclevel2ShortName}</h4>
                            <p>15 June, 2022</p>
                        </div>
                        <div>
                            <span><ContactSupportIcon /></span>
                            <p>Ask info</p>
                        </div>
                    </div>
                </div>
            </div>
            {mandiReport.length && <MandiRateReport mandiReport={mandiReport} />}
            <ArrivalReport />

        </div>
    )
}
