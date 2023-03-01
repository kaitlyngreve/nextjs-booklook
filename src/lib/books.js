import path from 'path'

export async function getBookData(id) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book = await response.json();
    console.log(book);

    // Combine the data with the id
    return {
        id,
        book
    }
}