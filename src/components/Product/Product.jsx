import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import formatPrice from '../../utils/priceFormatter'
import './product.scss';

const Product = ({ product, deleteProduct, increase, changeValue, decrease }) => {
	const { img, title, priceTotal, count, id } = product;

	return (
		<section className='product'>
			<div className='product__img'>
				<img src={`./images/products/${img}`} alt={title} />
			</div>
			<div className='product__title'>{title}</div>
			<div className='product__count'>
				<Count count={count} increase={increase} decrease={decrease} changeValue={changeValue} id={id} />
			</div>
			<div className='product__price'>
				{formatPrice(priceTotal)} $
			</div>
			<div className='product__controls'>
				<ButtonDelete deleteProduct={deleteProduct} id={id} />
			</div>
		</section>
	);
};

export default Product;
