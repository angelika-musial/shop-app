'use client';

import { Product } from '@/types/api';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';

type Props = {
	products: Product[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<section className={styles.productList}>
			{products.map((product) => (
				<ProductCard key={product.articleNumber} product={product} />
			))}
		</section>
	);
};
