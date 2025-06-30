// Build a shopping cart application using the useContext hook. Set up a context to manage the state of 
// the shopping cart. Create components to display products and a shopping cart. Use useContext for this

"use client"
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

// Array of products
const products = [
    {id: 1, name: "Shoes", price: 1000},
    {id: 2, name: "Shirt", price: 500},
    {id: 3, name: "Cap", price: 200}
];

export default function Home(){
    // Importing the functionalities from cart context
    const {cart, addToCart, removeToCart} = useContext(CartContext);
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return(
        <div>
            <p style={{padding: "3px 3px"}}>This is all of the items: </p>
            {products.map((data) => (
                <div key={data.id} style={{padding: "3px 3px"}}>
                    <p>{data.name} = {data.price}$</p>
                    <button onClick={() => addToCart(data)}>Add to cart</button>
                </div>
            ))}
            <p style={{padding: "3px 3px"}}>No. of products available: {cart.length}</p>

            
            {cart.map((data) => (
                <div key={data.id} style={{padding: "3px 3px"}}>
                    <p>{data.name} = {data.price}$</p>
                    <button onClick={() => removeToCart(data.id)}>Remove from cart</button>
                </div>
            ))}
            <p>Total amount of cart: {total}</p>
        </div>
    )
}