import searchbarStyles from '/src/styles/searchbar.module.css';

export default function SearchBooks({ searchBooks, handleSearchBooks, setBooksByQuery }) {

    return (
        <div className={searchbarStyles.container}>
            <form onSubmit={setBooksByQuery}>
                <input
                    type='text'
                    placeholder="Search..."
                    value={searchBooks}
                    onChange={handleSearchBooks}
                    name="searchInput"
                    className={searchbarStyles.input}
                />
                <button type="submit" className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">Find Book</button>
            </form>
        </div>
    )
}