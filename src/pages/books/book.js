

export default function Book({ book }) {
    let bookV = book.volumeInfo
    let bookImg = bookV.imageLinks

    console.log(bookV.authors)

    return (
        <div>
            <h4>Title: {bookV.title}</h4>
            <p>Author(s): {bookV.authors}</p>
            <img src={bookImg === undefined ? "" : `${bookImg.thumbnail}`} alt="book photo" />
        </div>
    )
}