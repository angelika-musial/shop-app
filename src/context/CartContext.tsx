'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
	cartCount: number;
	addToCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartCount, setCartCount] = useState(0);

	const addToCart = async () => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		setCartCount((prev) => prev + 1);
	};

	return (
		<CartContext.Provider value={{ cartCount, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart must be used within CartProvider');
	return context;
};
