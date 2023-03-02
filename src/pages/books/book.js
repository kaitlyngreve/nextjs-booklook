import Link from "next/link"
import bookStyles from '/src/styles/books.module.css';

export default function Book({ book }) {
    const bookVolume = book.volumeInfo
    const bookCover = bookVolume.imageLinks === undefined ? "" : `${bookVolume.imageLinks.thumbnail}`
    const bookAuthor = bookVolume.authors === undefined ? "N/A" : `${bookVolume.authors.join(", ")}`

    const limitedChars = (str) => {
        return str.length > 35 ? str.substring(0, 32) + "..." : str
    }

    return (
        <Link href={{ pathname: `/books/${book.id}`, query: { data: book.volumeInfo } }}>
            <div className={bookStyles.book}>
                <h4>{limitedChars(bookVolume.title)}</h4>
                <p>Author(s): {limitedChars(bookAuthor)}</p>
                <img className={bookStyles.bookImg} src={bookCover} alt="Book Cover" />
            </div>
        </Link>
    )
}