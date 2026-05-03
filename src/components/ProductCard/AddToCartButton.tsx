'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';

export const AddToCartButton = () => {
	const { addToCart } = useCart();
	const [isAdding, setIsAdding] = useState(false);

	const handleAdd = async () => {
		setIsAdding(true);
		try {
			await addToCart();
			toast.success('Product added to cart!', {
				style: {
					borderRadius: '10px',
					background: '#0f172a',
					color: '#fff',
				},
			});
		} catch {
			toast.error('Something went wrong');
		} finally {
			setIsAdding(false);
		}
	};

	return (
		<button onClick={handleAdd} disabled={isAdding}>
			{isAdding ? 'Adding...' : 'Add to cart'}
		</button>
	);
};
