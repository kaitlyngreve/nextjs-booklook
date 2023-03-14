import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.header}>Book 📖 Look</h1>
            <Link href={'/books/search'}
                className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
                Looking for a specific book?
            </Link>
        </div>
    )
}