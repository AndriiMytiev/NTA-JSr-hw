import {useSelector} from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductItem from "../components/ProductItem/ProductItem";

const ProductsPage = () => {
    const products = useSelector(state => state.products.products)

    return (
        <div>
            <ProductsList>
                {products.map(product =>
                    <ProductItem key={product.id} product={product}/>)}
            </ProductsList>
        </div>
    );
};

export default ProductsPage;