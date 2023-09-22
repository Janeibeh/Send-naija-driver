import React from 'react';


import {MdAccountCircle} from 'react-icons/md'

import { GiFruitTree, GiTreehouse} from 'react-icons/gi'

import { GrHelp }  from 'react-icons/gr';

import {FaSearch} from 'react-icons/fa'

import {TiShoppingCart} from 'react-icons/ti'

const Navbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">    
                    <a className="navbar-brand" href="#" >Send-Naija-</a><span className="stores"> Driver <GiFruitTree size='1.7rem'  color='black'/></span> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <form className="search" >
                        <input   name="" className="form-control me-sm-2" type="search" placeholder="Search pick up location..." aria-label="Search" />
                        <button className="btn btn-dark my-2 my-sm-0" type="submit"> <FaSearch size='0.7rem'/> Search</button>
                    </form>

                    <li className=" nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <MdAccountCircle size='2rem'/>  ACCOUNT
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item " href="#">My Account</a>
                                    <a className="dropdown-item " href="#">My Orders</a>
                                    <a className="dropdown-item" href="#">Saved items</a>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" href="#">Something else here</button>
                                </div>
                            </li>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li  className="shop">
                                <a to='/shop' >  REVIEWS <TiShoppingCart  size='1.7rem'/>  </a>
                            </li>


                            

                            <li className="nav-item dropdown" >
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            < GrHelp size='1.5rem' color='white'/> HELP
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                          <a className="dropdown-item" href="#">Help Centre</a>
                                          <a className="dropdown-item" href="#">Place Order</a>
                                          <button className="dropdown-item" href="#">Payment Options</button>
                                          <a className="dropdown-item" href="#">Track Orders</a>
                                          <button className="dropdown-item" href="#">Cancel Orders</button>
                                          <button className="dropdown-item" href="#">Refund Policy</button>
                                          <div className="dropdown-divider"></div>
                                          <button className="dropdown-item" href="#">Something else here</button>
                                        </div>
                              </li>
      
                          </ul>
    
                      </div>
                </div>
                
            </nav>
      
        </>
    )
}

export default Navbar