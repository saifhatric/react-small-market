import React from 'react'
import { FaTrash } from "react-icons/fa"
import items from './items'
const Checkout = ({ Items, handleDelete }) => {

  return (
    <main>
      {Items.map((item, index) => {
        return (
          <>
            <div className='product' key={index}>
              <p style={{ margin: "1rem", fontSize: "20px" }}>{index + 1}_</p>
              <p>{item.product}</p>
              <p style={{ marginLeft: "1rem" }}>{item.prise}</p>
              <FaTrash
                style={{ cursor: "pointer", margin: "15px" }}
                onClick={() => handleDelete(item.id)}
              />
            </div>

          </>
        )

      })}

    </main>
  )
}

export default Checkout;