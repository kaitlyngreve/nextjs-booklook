import Link from "next/link";
import Hero from "@/components/hero";
import { getBookData } from '../../lib/books';

import styles from './id.module.css'

export default function Book({ bookData }) {
    const bookVolume = bookData.book.volumeInfo;
    const bookCover = bookVolume.imageLinks === undefined ? "" : `${bookVolume.imageLinks.thumbnail}`;
    const bookAuthor = bookVolume.authors === undefined ? "N/A" : `${bookVolume.authors.join(", ")}`;

    return (
        <div>
            <Hero />
            <div className={styles.container}>
                <h4 className={styles.title}>{bookVolume.title}</h4>
                <p>{bookAuthor}</p>
                <img className={styles.coverImg} src={bookCover} alt="Book Cover" />
                <div dangerouslySetInnerHTML={{ __html: bookVolume.description }} />
                <Link
                    className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
                    href={"/books/search"}>
                    Back to Search
                </Link>
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const bookData = await getBookData(params.id)
    return {
        props: {
            bookData
        }
    }
}