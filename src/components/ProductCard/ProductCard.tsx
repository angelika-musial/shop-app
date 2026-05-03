'use client';

import Image from 'next/image';
import { Product } from '@/types/api';
import styles from './ProductCard.module.scss';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const { image, title, description, brandName, price, promotion } = product;

    const discountedPrice = promotion 
        ? price * (1 - promotion.percentage / 100) 
        : null;

    const handleAdd = async () => {
        setIsAdding(true);
        await addToCart();
        setIsAdding(false);
    };

    return (
        <div className={styles.card}>
            <Image
                src={image.url}
                alt={image.altText}
                width={200}
                height={200}
                className={styles.image}
            />

            <h2>{title}</h2>
            <p>{description}</p>
            <p className={styles.brand}>{brandName}</p>

            <div className={styles.priceSection}>
                {promotion ? (
                    <>
                        <span className={styles.oldPrice}>{price} zł</span>
                        <span className={styles.newPrice}>
                            {discountedPrice?.toFixed(2)} zł
                        </span>
                    </>
                ) : (
                    <span>{price} zł</span>
                )}
            </div>

            {promotion && (
                <span className={styles.promo}>
                    {promotion.name} -{promotion.percentage}%
                </span>
            )}

            <button onClick={handleAdd} disabled={isAdding}>
                {isAdding ? 'Adding...' : 'Add to cart'}
            </button>
        </div>
    );
};
