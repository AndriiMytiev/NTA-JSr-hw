import ProductItem from "../components/ProductItem/ProductItem";
import ProductsList from "../components/ProductsList/ProductsList";
import {useSelector} from "react-redux";

const CartPage = () => {
    const products = useSelector(state => state.cart.cart)

    return (
        <div>
            <ProductsList>
                {products.map(product => <ProductItem key={product.id} product={product} isCartPage={true}/>)}
            </ProductsList>
        </div>
    );
};

export default CartPage;