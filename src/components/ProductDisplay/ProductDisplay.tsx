import type {ProductDisplayProps} from "../../types";

export default function ProductDisplayCard (props:ProductDisplayProps){
    return(
    <div>
       <p>{props.product.name}</p>
       <p>{props.product.price}</p>
       <p>{props.product.description}</p>
       <p>In Stock</p>
       <button onClick= {()=>props.onAddToCart(props.product.id)}>Add to Cart</button>
    </div>
          
    );
}