import styles from './intro.module.css';
import Login from './login';

export default function Intro() {
    return (
        <div className={styles.container}>
            <p className={styles.p}>Introducing Book Look - the ultimate app for all book lovers!
                With Book Look, you can easily search for any book you desire,
                read up on detailed information about it, and even save your favorite books to your personalized wishlists and "read list".
            </p>
            <p className={styles.p}>To get started with Book Look, you can either search for a book you're interested in, or login to access extra options like adding books to your wishlist or logging books as "read."</p>
            <p className={styles.p}>Happy reading!</p>
            <Login />
        </div>
    )
}