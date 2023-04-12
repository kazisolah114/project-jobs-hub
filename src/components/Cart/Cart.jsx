import React from 'react';
import './Cart.css'

const Cart = ({job}) => {
    const {image, job_title, availability_1, availability_2, company_name, salary, addressd, id} = job;
    return (
        <div className='cart-section'>
            
            <div className='cart-body'>
                <div className='cart-right'>
                    <div className='cart-img'>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h5>{job_title}</h5>
                        <p>{company_name}</p>
                        <div>
                            <button className='cart-small-btn'>{availability_1}</button>
                            <button className='cart-small-btn'>{availability_2}</button>
                        </div>
                        <div className='cart-right-info'>
                            <p><img src="https://i.ibb.co/QbxxZFG/Frame-4.png" alt="" />{addressd}</p>
                            <p><img src="https://i.ibb.co/M2j9hVC/Frame.png" alt="" />Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='main-button'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;