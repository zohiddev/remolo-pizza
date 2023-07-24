import { useDispatch, useSelector } from "react-redux";
import { ProductCardMini } from "../card/ProductCardMini";
import { removeCart } from "../../redux/slices/cartSlice";
import { Icon } from "../ui/Icon";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import { sumAllPrice } from "../../helpers/helpers";

export const CartProductsList = ({ product }) => {


  const dispatch = useDispatch();
  

  // // const {dispatch} = useContext(StoreContext);
  const {cart}  = useSelector(state => state);
  const cartProductsData = cart.items;
  

  const handleRemoveCartChange = () => {
    dispatch(removeCart({product}));
  }
  


  return (
    <div className="cart-products__list">
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
        </div>
        <Icon clickHandler={handleRemoveCartChange}>
          <img src={deleteIconSvg} alt="delete icon" />
        </Icon>
      </div>
      {
        cartProductsData.length > 0 
        ?           
        <>{cartProductsData.map((product, i) => (
        <ProductCardMini
        key={i}
        product={product}
        />))}</> 
        : 
        <h3 className="pust">Ваша корзина пусто для покупок.</h3>
      }

      <div className='cart-sum'>
          <h3>Enviototales</h3>
          <h3>${sumAllPrice(cartProductsData)}</h3>
        </div>
      </div>
  );
};
