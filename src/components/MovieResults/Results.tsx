import React from 'react'
import SearchBox from '../SearchBox/Search'
import Thumbnail from './Thumbnail'

const MovieResults = ({ results }: any) => {
  return (
    <>
      <SearchBox />
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {
              results.map((result: { id: React.Key | null | undefined }) => (
                  <Thumbnail key={result.id} result={result} />
              ))
          }
      </div>
    </>
  )
}

export default MovieResults