import { useDispatch ,useSelector} from "react-redux";
import { addProduct, increaseCart } from "../../store/slices/cart";
export default function ProductCard(props) {

  const { productData, handleNavigate } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="card position-relative" style={{height:'400px'}}>
      <div>
      {productData.stock === 0 ? (
          <span className="badge text-bg-danger position-absolute m-2">Out of stock</span>
        ) : (
          <span className="badge text-bg-success position-absolute m-2">In stock</span>
        )}
      </div>
      <img src={productData.thumbnail} className="card-img-top h-50" alt="..." />
      <div className="card-body position-relative">
        <div className="row">
          <p className="card-title col">{productData.title}</p>
          <div className="col position-relative">
            <span className=" position-absolute end-0" >{productData.price} $ </span>
          </div>   
        </div>
        <p className="card-text" style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>
          {productData.description}
        </p>
        <span className="text-warning">{productData.rating}</span>
        <button
          className="rounded-5 position-absolute bottom-0 start-0 m-3 btn border border-2 border-dark"
          onClick={cart.cartContentAmount !== cart.cartContentAmountLimit ? 
            () => {dispatch(increaseCart(productData)); dispatch(addProduct(productData))} : () => {}}
        >Add to cart</button>
        <button
          className="rounded-5 position-absolute bottom-0 end-0 m-3 btn btn-success"
          onClick={() => handleNavigate(productData.id)}
        >View Details</button>
      </div>
    </div>
    
  );
}
