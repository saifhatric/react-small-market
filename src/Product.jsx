import { React, useContext } from 'react'
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import items from "./items";
//import { appContext } from './App';
const Product = ({ Items, setItems }) => {
    //const  = useContext(appContext);
    const addProduct = (item, pris) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const myProduct = { id: id, product: item, prise: pris };
        const Products = [...Items, myProduct];
        setItems(Products);
    }
    return (
        <>
            <div className="items">
                {Array.from(items).map((item, index) => {
                    return (
                        <>
                            <div className='products'>
                                <div className='box' key={index} >
                                    <IoShirtOutline className='shirt' />
                                    <p style={{
                                        textAlign: "center",
                                        marginTop: "1px",
                                        fontWeight: "bold"
                                    }}>
                                        {item.name}
                                    </p>
                                </div>
                                <div className='purchse' onClick={() => addProduct(item.name, item.prise)}>
                                    <p>
                                        {item.prise}
                                    </p>
                                    <AiFillShopping className='purchse-icon' />
                                </div>
                            </div>


                        </>
                    )
                })}

            </div >

        </ >
    )
}

export default Product;