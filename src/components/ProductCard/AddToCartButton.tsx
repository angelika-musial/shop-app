'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export const AddToCartButton = () => {
	const { addToCart } = useCart();
	const [isAdding, setIsAdding] = useState(false);

	const handleAdd = async () => {
		setIsAdding(true);
		await addToCart();
		setIsAdding(false);
	};

	return (
		<button onClick={handleAdd} disabled={isAdding}>
			{isAdding ? 'Adding...' : 'Add to cart'}
		</button>
	);
};
