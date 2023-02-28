

export default function Book({ book }) {
    const bookV = book.volumeInfo

    return <div>{bookV.title}</div>
}