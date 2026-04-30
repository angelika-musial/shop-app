import { getProducts } from '@/lib/api';

export default async function Home() {
	const data = await getProducts();

	return (
		<main>
			<h1>{data.title}</h1>

			{data.products.map((product) => (
				<div key={product.articleNumber}>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
				</div>
			))}
		</main>
	);
}
