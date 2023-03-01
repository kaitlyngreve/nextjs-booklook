import Link from "next/link";
import { useRouter } from 'next/router'
import { getBookData } from '../../lib/books';

export default function Book({ bookData }) {

    console.log(bookData);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">{bookData.book.volumeInfo.title}</h1>
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