import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <div>
            <IconContext.Provider value={{color:'#fff', size:64}}>
            <div className="pricing_section">
                <div className="pricing_wrapper">
                    <h1 className="pricing_heading">Pricing</h1>
                    <div className="pricing_container">
                        <Link to='/signup' className='pricing_container_card'>
                            <div className="pricing_container_cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$4.99</h4>
                                <p>per month</p>
                                <ul className="pricing_container_feature">
                                    <li>100 Transactions</li>
                                    <li>2% Cashback</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/signup' className='pricing_container_card'>
                            <div className="pricing_container_cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$19.99</h4>
                                <p>per month</p>
                                <ul className="pricing_container_feature">
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cashback</li>
                                    <li>Unlimited Spending</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='blue'>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/signup' className='pricing_container_card'>
                            <div className="pricing_container_cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$9.99</h4>
                                <p>per month</p>
                                <ul className="pricing_container_feature">
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cashback</li>
                                    <li>$100,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    )
}

export default Pricing
