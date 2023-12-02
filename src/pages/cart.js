import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {decreaseCart, deleteProduct, addProduct, increaseCart} from "../store/slices/cart";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  var totalPrice = 0
  return (
    <>
      <div><h1>Cart</h1></div>
      <div className='m-auto'>
        <table className='table '>
          <caption>Cart Elments</caption>
          <thead className='table-info'>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody> 
          {cart.cartedProducts?.map((product, index) => {
            totalPrice = totalPrice + product.price * product.count
            return(
            <tr>
              <td >
                <div className='row'>
                  <img className='col' style={{width: "100px", height: "100px"}} src={product.thumbnail} alt=''/>
                  <p className='col m-auto'>{product.title}</p>
                </div> 
              </td>
              <td>
                <div className='row' style={{height: "100px"}}>
                  <button className='col m-auto btn btn-success' onClick={cart.cartContentAmount !== cart.cartContentAmountLimit ? 
                    () => {dispatch(increaseCart(product)); dispatch(addProduct(product))} : () => {}}>+</button>
                  <div className='col m-auto btn border border-dark'>{product.count}</div>
                  <button className='col m-auto btn bg-secondary text-light' 
                  onClick={product.count <= 1 ? 
                  () => dispatch(deleteProduct(product)) : () => dispatch(decreaseCart(product))}>-</button>
                </div>   
              </td>
              <td>
                <div className='row' style={{height: "100px"}}>
                  <button className='col col-3 m-auto btn btn-danger' onClick={() => dispatch(deleteProduct(product))}>x</button>
                </div>
              </td>
              <td>
                <div className='row' style={{height: "100px"}}>
                  <h6 className='col m-auto'>{product.price} $</h6>
                </div>
              </td>
              <td>
                <div className='row' style={{height: "100px"}}>
                    <h5 className='col m-auto'>{product.price * product.count} $</h5>
                </div>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <div className='btn border border-2 border-success' style={{marginLeft:'50%'}}>
        Tatal Price : <span className='text-primary'>{totalPrice} $</span></div>
    </div>  
    </>
    
  )
}
