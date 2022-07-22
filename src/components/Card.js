import React from 'react'
import pin from '../images/pin.svg'

export default function Card(props) {
    return (
        <div className="card">
            <img className='card__img' src={props.item.imageUrl} alt='imagem'/>
            <div className='card__info'>
                <div className='card__local'>
                    <img className='card__pin' src={pin} alt='pin'/>
                    <p className='card__location'>{props.item.location}</p>
                    <a className='card__googleMaps' href={props.item.googleMapsUrl}>View on google maps</a>
                </div>
                <h2 className='card__title'>{props.item.title}</h2>
                <p className='card__date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='card__description'>{props.item.description}</p>
            </div>
        </div>
    )
}