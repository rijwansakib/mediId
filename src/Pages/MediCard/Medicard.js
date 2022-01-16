import React from 'react';
import"../MediCard/MediCard.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Medicard = () => {
    return (
        <div className='medicin'>
            <div className='cart'>
                <FontAwesomeIcon icon={faPlus} size="2x" className="plusIcon"></FontAwesomeIcon>
                <img className='product-img' src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg" alt="" />
                <div className="product-dtls">
                <h5>Trueplus Fibre Food Supplement 90 Tablets</h5>
                <h6>$ 2.5</h6>
                </div>
            </div>
            <div className='cart'>
                <FontAwesomeIcon icon={faPlus} size="2x" className="plusIcon"></FontAwesomeIcon>
                <img className='product-img' src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg" alt="" />
                <div className="product-dtls">
                <h5>Trueplus Fibre Food Supplement 90 Tablets</h5>
                <h6>$ 2.5</h6>
                </div>
            </div>
            <div className='cart'>
                <FontAwesomeIcon icon={faPlus} size="2x" className="plusIcon"></FontAwesomeIcon>
                <img className='product-img' src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg" alt="" />
                <div className="product-dtls">
                <h5>Trueplus Fibre Food Supplement 90 Tablets</h5>
                <h6>$ 2.5</h6>
                </div>
            </div>
        </div>
    );
};

export default Medicard;