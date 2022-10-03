import React, { useState } from 'react'
import Product from './Product'

const ProductList = () => {
  const [products, setProducts] = useState(Seed.products)

  const handleProductUpVote = (productId) => {
    const nextProducts = products.map((product) => {
      if (product.id === productId) {
        // update current product.votes
        return { ...product, votes: product.votes + 1 }
      }

      return product
    })

    setProducts(nextProducts.sort((a, b) => b.votes - a.votes))
  }

  const productComponents = products.map((product) => (
    <Product
      key={'product-' + product.id}
      product={product}
      onVote={handleProductUpVote}
    />
  ))
  return <div className="ui unstackable items">{productComponents}</div>
}

export default ProductList
