'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.scss';

export const CartBadge = () => {
	const { cartCount } = useCart();

	return (
		<div className={styles.cartContainer}>
			<div className={styles.cartIconWrapper}>
				<ShoppingCart size={24} strokeWidth={2} className={styles.icon} />

				{cartCount > 0 && (
					<span
						className={styles.badge}
						aria-label={`${cartCount} items in cart`}
					>
						{cartCount}
					</span>
				)}
			</div>
		</div>
	);
};
