import { getApiUrl } from '../helpers/getApiUrl';
import { formatCurrency } from '../helpers/formatCurrency';
import { getAbsolutePrice } from '../helpers/getAbsolutePrice';
import { navbarToggled, setActiveCategory, setActivePage } from "../redux/actions/layoutActions";
import { cartAdd, cartRemove, increaseCart, decreaseCart, clearCart } from '../redux/actions/cartActions';

export {
    getApiUrl,
    formatCurrency,
    getAbsolutePrice,
    navbarToggled,
    setActiveCategory,
    setActivePage,
    cartAdd,
    cartRemove,
    increaseCart,
    decreaseCart,
    clearCart
};
