import Link from "next/link";
import { getBookData } from '../../lib/books';

export default function Book({ bookData }) {
    const bookV = bookData.book.volumeInfo;
    const bookCover = bookV.imageLinks === undefined ? "" : `${bookV.imageLinks.thumbnail}`;
    const bookAuthor = bookV.authors === undefined ? "N/A" : `${bookV.authors.join(", ")}`;

    return (
        <div>
            <h4 className="text-3xl font-bold underline">{bookV.title}</h4>
            <p>{bookAuthor}</p>
            <img src={bookCover} alt="Book Cover" />
            <p>{bookV.categories}</p>
            <Link href={"/books/search"}>back you go bye</Link>
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