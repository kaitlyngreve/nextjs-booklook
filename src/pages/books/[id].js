import Link from "next/link";
import { getBookData } from '../../lib/books';

export default function Book({ bookData }) {
    const bookVolume = bookData.book.volumeInfo;
    const bookCover = bookVolume.imageLinks === undefined ? "" : `${bookVolume.imageLinks.thumbnail}`;
    const bookAuthor = bookVolume.authors === undefined ? "N/A" : `${bookVolume.authors.join(", ")}`;

    return (
        <div>
            <h4 className="text-3xl font-bold underline">{bookVolume.title}</h4>
            <p>{bookAuthor}</p>
            <img src={bookCover} alt="Book Cover" />
            <div dangerouslySetInnerHTML={{ __html: bookVolume.description }} />
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