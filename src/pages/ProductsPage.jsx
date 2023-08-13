import React from 'react'
import { PageHero,Sort,ProductList,Filter } from '../component'

export default function ProductsPage() {
  return (
    <div>
      <PageHero title='products'/>
        <div className='grid-container'>
          <section className='filter-component'><Filter/></section>
          <section className='sort-component'><Sort/></section>
          {/* <section className='product-list-component'><ProductList/></section> */}
        </div>
    </div>
  )
}
