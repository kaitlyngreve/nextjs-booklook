import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <Link className={styles.header} href={'/'}>
                Book 📖 Look
            </Link>
            <Link href={'/books/search'}
                className={styles.searchButton}>
                Looking for a specific book?
            </Link>
        </div>
    )
}