

export default function Book({ book }) {
    let bookV = book.volumeInfo
    const bookImg = bookV.imageLinks === undefined ? "" : `${bookV.imageLinks.thumbnail}`
    const bookAuthor = bookV.authors === undefined ? "N/A" : `${bookV.authors.join(", ")}`

    return (
        <div>
            <h4>Title: {bookV.title}</h4>
            <p>Author(s): {bookAuthor}</p>
            <img src={bookImg} alt="Book Cover" />
        </div>
    )
}