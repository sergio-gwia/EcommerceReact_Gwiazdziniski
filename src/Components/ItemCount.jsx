import React from 'react'
import { useState } from 'react'

function ItemCount() {
    const [cantidad, setCantidad] = useState(1)
    const [stock, setStock] = useState(20)

    return (
        <>
        <div className='d-flex'>

            <button className="btn btn-light btn-contador" onClick={()=>{
                stock > 1 && stock <= 20 ? (setCantidad(cantidad + 1), setStock(stock - 1)) : setCantidad(20)
            }}>+</button>

            <p className='numero-cantidad'>{cantidad}</p>
            
            <button className="btn btn-light btn-contador" onClick={()=>{
                stock >= 1 && stock < 20 ? (setCantidad(cantidad - 1), setStock(stock + 1)) : setCantidad(1)
            }}>-</button>

        </div>
        </>
    )
}

export default ItemCount