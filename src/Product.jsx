import React from 'react'

const Product = ({ product, onVote }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={product.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => onVote(product.id)}>
            <i className="large caret up icon" />
          </a>
          {product.votes}
        </div>
        <div className="description">
          <a href={product.url}>{product.title}</a>
          <p>{product.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={product.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  )
}

export default Product
