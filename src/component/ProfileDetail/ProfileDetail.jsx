import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SellerDetail from './SellerDetail/SellerDetail.jsx'
import './ProfileDetail.css'


export default function ProfileDetail() {
  const [dataInObject, setDataInObject] = useState({})
  
  useEffect(() => {
    async function fetchingApiData() {
      let dataFromServer = await fetch('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco')
      let data = await dataFromServer.json()
      setDataInObject(data)
      
    }
    fetchingApiData()
  }, [])
  
  let { name, loclevel3Name, loclevel2Name, products, business } = dataInObject

  return (
    <>
      {Object.keys(dataInObject).length &&
        <div className='profile-Container'>
          <div className='profile-header'>
            <div className='profile-image'>
              <img src="" alt="" srcset="" />
            </div>
            <div className='profile-text'>
              <div className='profile__nameArButton'>
                <h2>{name}</h2>
                <Button className="profile-share-btn" variant="contained"><ShareIcon className='shareIcon' />Share</Button>
              </div>
              <p>{loclevel3Name}, {loclevel2Name}</p>
              <p>Speaks English</p>
              <div className='profile-btn'>
                <Button className="contact-btn" variant="contained"><PersonAddIcon className="personIcon" />Contact</Button>
                <Button className="connect-btn" variant="outlined"><PhoneIcon className='phoneIcon' />Connect</Button>
              </div>
            </div>
          </div>
          <div className='profile-selection-btn' >
            <Button className='-selection-btn__business Active-Btn'>Business</Button>
            <Button className="-selection-btn__review" >Review</Button>
          </div>
          <SellerDetail products={products} business={business} />
        </div>
      }
    </>


  )
}
