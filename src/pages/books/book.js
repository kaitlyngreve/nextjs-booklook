

export default function Book({ book }) {
    let bookV = book.volumeInfo
    let bookImg = bookV.imageLinks

    return (
        <div>
            <h4>Title: {bookV.title}</h4>
            <p>Author(s): {bookV.authors}</p>
            <img src={bookImg === undefined ? "" : `${bookImg.thumbnail}`} />
        </div>
    )
}