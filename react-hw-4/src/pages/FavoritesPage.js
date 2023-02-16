import ProductItem from "../components/ProductItem/ProductItem";
import ProductsList from "../components/ProductsList/ProductsList";
import {useSelector} from "react-redux";

const FavoritesPage = () => {
    const products = useSelector(state => state.favorites.favorites)

    return (
        <div>
            <ProductsList>
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </ProductsList>
        </div>
    );
};

export default FavoritesPage;