import React from "react"
import './quoteCard.css';

export function QuoteCard (props) {
    return (
        <div className='container'>
            <p className = "para">{props.description}</p>
            <p className='author'>{props.author}</p>
        </div>
    )
}