import React from 'react'
import ProductCard from './ProductCard/ProductCard'

import './SellerDetail.css'

export default function SellerDetail({ products, business }) {
  let { userOption, marketStdName, firmName, mandiShopnum } = business

  return (
    <div className='agent-container'>
      <h3 className='agent-heading'>{userOption}</h3>
      <table className='agent-table'>
        <tbody>
          <tr>
            <th>Market Name</th>
            <td>
              {marketStdName}</td>
          </tr>
          <tr>
            <th>Firm Name
            </th>
            <td>{firmName}</td>
          </tr>
          <tr>
            <th>Shop Number
            </th>
            <td>{mandiShopnum}</td>
          </tr>
        </tbody>
      </table>
      <div className='product-header'>
        <h4 className='product-header__text'>Product</h4>
      </div>
      {products.map((type, index) => <ProductCard key={index} vegetableName={type.cmdtyStdName} vegetableDetail={type.posts} sortOrder={type.sortOrder} />)}


    </div>

  )
}
