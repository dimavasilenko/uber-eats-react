import React from 'react'
import './product-card.css'
import dish from '../images/dish.png'

export function ProductCard() {
    return(
        <li>
            <a href="javascript:void(0)" className="product-card">
                <div className="product-card__content">
                    <span className="product-card__title">Сельдь на бородинском хлебе</span>
                    <span className="product-card__consist">С яйцом и огурцом</span>
                    <span className="product-card__price">99 &#8372;</span>
                </div>
                <img src={dish} alt=""/>
            </a>
        </li>
    );
}