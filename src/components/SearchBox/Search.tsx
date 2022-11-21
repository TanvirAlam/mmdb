import React from 'react'

type SearchProps = {
    setSearchText: (input: string) => void 
    searchForMovies: (e: any) => void
}

const SearchBox = ({setSearchText, searchForMovies}: SearchProps) => {

  return (
    <div className="pt-10 flex flex-cols justify-center">
            <div className="flex">
                <div className="relative w-full">
                    <input 
                        type="search" 
                        id="search-dropdown" 
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                        placeholder="Search..." 
                        onChange={e => setSearchText(e.target.value)}
                        required 
                    />
                    <button 
                        type="button" 
                        onClick={searchForMovies}
                        onKeyDown={(e) => e.key === 'Enter' && searchForMovies}
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-orange rounded-r-lg border border-orange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-orange-light dark:bg-orange-light dark:hover:bg-orange dark:focus:ring-orange">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default SearchBox