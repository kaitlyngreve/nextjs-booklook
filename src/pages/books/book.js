import Link from "next/link"
import bookStyles from '/src/styles/books.module.css';

export default function Book({ book }) {
    let bookV = book.volumeInfo
    const bookCover = bookV.imageLinks === undefined ? "" : `${bookV.imageLinks.thumbnail}`
    const bookAuthor = bookV.authors === undefined ? "N/A" : `${bookV.authors.join(", ")}`

    const limitedChars = (str) => {
        return str.length > 35 ? str.substring(0, 32) + "..." : str
    }

    return (
        <Link href={{ pathname: `/books/${book.id}`, query: { data: book.volumeInfo } }}>
            <div className={bookStyles.card}>
                <h4>{limitedChars(bookV.title)}</h4>
                <p>Author(s): {limitedChars(bookAuthor)}</p>
                <img className={bookStyles.bookImg} src={bookCover} alt="Book Cover" />
            </div>
        </Link>
    )
}