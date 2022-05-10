import React from 'react'
import './productItemstyle.scss'

function ProductItem(props) {
  return (
    <li className="productItem__list" key={props.key}>
        <h2>{props.key} {props.title}</h2>
        <figure><img className="productItem__img" src={props.src} alt={props.title} /></figure>
        <p className="productItem__desc">{props.description}</p>
        <p>{props.price} €</p>
    </li>

  )
}

export default ProductItem