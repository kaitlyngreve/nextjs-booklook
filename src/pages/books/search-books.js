

export default function SearchBooks({ searchBooks, handleSearchBooks, setBooksByQuery }) {

    return (
        <div>
            <form onSubmit={setBooksByQuery}>
                <input
                    type='text'
                    placeholder="Search by title..."
                    value={searchBooks}
                    onChange={handleSearchBooks}
                    name="searchInput"
                />
                <button type="submit" className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">Find Book</button>
            </form>
        </div>
    )
}