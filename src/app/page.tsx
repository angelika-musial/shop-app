import { getProducts } from '@/lib/api';
import { ProductList } from '@/components/ProductList/ProductList';

export default async function Home() {
	const data = await getProducts();

	return (
		<main>
			<ProductList products={data.products} />
		</main>
	);
}
