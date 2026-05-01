import type { Metadata } from 'next';
import './globals.scss';

import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header/Header';
import { getProducts } from '@/lib/api';

export const metadata: Metadata = {
	title: 'Columbus Store',
	description: 'Recruitment Task',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const data = await getProducts();

	return (
		<html lang='en'>
			<body>
				<CartProvider>
					<Header logo={data.logo} />
					<main>{children}</main>
				</CartProvider>
			</body>
		</html>
	);
}
