import Image from 'next/image';
import { CartBadge } from './CartBadge';
import styles from './Header.module.scss';

type Props = {
	logo: { url: string; altText: string };
};

export const Header = ({ logo }: Props) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<Image
						src={logo.url}
						alt={logo.altText}
						width={160}
						height={50}
						priority
						className={styles.logoImage}
					/>
				</div>

				<CartBadge />
			</div>
		</header>
	);
};
