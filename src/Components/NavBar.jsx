import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <>

    <div className='barra d-flex justify-content-center align-items-center'>
        <div className='text-white'>Envio Gratis a partir de los $9500</div>
    </div>

    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-evenly">
            <a className="navbar-brand" href="#">FVSport</a>

            <div>

                <ul className="navbar-nav d-flex flex-row gap-4">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#'>Disabled</a>
                    </li>
                </ul>

            </div>

            <CartWidget/> 
        </div>   
    </nav>

    </>
    
  )
}

export default NavBar 