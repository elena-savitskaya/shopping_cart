const ButtonDelete = ({ deleteProduct, id }) => {
	return (
		<button type='button' onClick={()=>{deleteProduct(id);}}>
			<img src='./images/icons/cross.svg' alt='Delete' />
		</button>
	);
};

export default ButtonDelete;