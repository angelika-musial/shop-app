import { getProducts } from '@/lib/api';
import { ProductList } from '@/components/ProductList/ProductList';

export default async function Home() {
	const data = await getProducts();

	return (
		<main>
			<header className='page-header'>
				<h1>Our Products</h1>
				<p>Discover our carefully curated collection</p>
			</header>
			<ProductList products={data.products} />
		</main>
	);
}
