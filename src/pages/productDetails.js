import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios'

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({})
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/${params.id}`)
      .then((res) => {setProductDetails(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col m-3">
          <div>
            <img className="w-100" src={productDetails.thumbnail} alt=''></img>
          </div>
          <div className="row mt-3">
            {productDetails?.images?.map((image,index) => {
              return(
                <div className="col m-1">
                  <img className="img-fluid" src={image} alt=''></img>
                </div>  
              );
            })}
            
          </div>
        </div>
        <div className="col m-3">
          <h1>{productDetails.title}</h1>
          <p>{productDetails.description}</p>
          <p className="text-warning">{productDetails.rating}</p>
          {productDetails.discountPercentage === 0 ? 
          <p className="text-primary">{productDetails.price} $</p> :
          <div className="row">
            <p className="text-danger col col-2" style={{textDecorationLine: "line-through"}}>{productDetails.price} $ </p>
            <p className="text-success col">after 
            <span className="text-primary"> -{productDetails.discountPercentage} %- </span> 
            discount, price is {productDetails.price -(productDetails.price * productDetails.discountPercentage / 100)} $</p>
          </div>
          }
          
          <div>
            {productDetails.stock === 0 ? (
              <span className="badge text-bg-danger m-2">Out of stock</span>
            ) : (
              <span className="badge text-bg-success m-2">In stock</span>
            )}
          </div>
          <div className="row">
            <p className="col col-2 btn rounded-pill border border-2 border-dark m-2">category</p>
            <p className="col col-2 btn rounded-pill border border-2 border-dark m-2">brand</p>
          </div>
          <div className="row">
            <div1 className="col"><input className="form-control" type="number" placeholder={0}/></div1>
            <p className="col">only <span className="text-danger">{productDetails.stock}</span> items left!<br/>Don`t miss it</p>
          </div>
          <div className="row">
            <button className="col rounded-5 btn btn-success m-3">Buy Now</button>
            <button className="col rounded-5 btn border border-dark m-3">Add to cart</button>
          </div> 
        </div>
      </div>
    </>
  );
}
