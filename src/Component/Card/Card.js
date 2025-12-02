import React from 'react'
import './Card.css'
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Card = (props) => {
  return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src= {props.image}/>
                <div className='most-popular-item-contact'>
                    <h4 className='most-popular-item-title'> 
                        {props.title} <br />
                         <span> {props.category} </span>
                    </h4>
                    <ul className='ul-m-p'>
                            <li><FaStar className='fastar' /><span>{props.rate}</span></li>
                            <li><FaDownload className='fadownload'/><span>{props.download}</span></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Card