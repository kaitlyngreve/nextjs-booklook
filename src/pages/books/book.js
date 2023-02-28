

export default function Book({ book }) {
    const bookV = book.volumeInfo
    const bookImg = book.volumeInfo.imageLinks

    return (
        <div>
            <h4>Title: {bookV.title}</h4>
            <p>Author(s): {bookV.authors}</p>
            <img src={bookImg.thumbnail} />
        </div>
    )
}