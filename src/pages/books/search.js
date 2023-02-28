import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Book from './book';
import SearchBooks from './search-books';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState("");

    const handleSearchBooks = (e) => {
        setSearchBooks(e.target.value)
    }

    const setBooksByQuery = (e) => {
        e.preventDefault();

        const searchQuery = e.target.searchInput.value;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&printType=books`)
            .then((r) => r.json())
            .then((data) => setBooks(data.items))

        setSearchBooks("");
    };

    return (
        <div>
            <Head>
                <title>Search For Books</title>
            </Head>

            <Link href={'/'}>Back</Link>

            <SearchBooks setBooksByQuery={setBooksByQuery} searchBooks={searchBooks} handleSearchBooks={handleSearchBooks} />
            {books.map((book) => {
                return <Book book={book} key={book.id} />
            })}
        </div>
    )
}