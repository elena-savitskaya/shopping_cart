import formatPrice from './../../utils/priceFormatter';
import './cartFooter.scss';

const CartFooter = ({ total }) => {
	const { count, price } = total;

	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} units</div>
			<div className='cart-footer__price'> 
			Total {formatPrice(price)} $
			</div>
		</footer>
	);
};

export default CartFooter;