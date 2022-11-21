import React, { useState } from 'react'
import requests from '../../utils/requests'
import SearchBox from '../SearchBox/Search'
import Thumbnail from './Thumbnail'
import apiClient from '../../server/http-common'

const MovieResults = ({ results }: any) => {
  const [searchText, setSearchText] = useState('');
  const [movieResults, setMovieResults] = useState(results);

  const searchForMovies = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await apiClient.get(`${requests['searchMovies']?.url}`, { params: { query: searchText } })
    const results = await response.data.results
    setMovieResults(results)
  }

  return (
    <>
      <SearchBox setSearchText={setSearchText} searchForMovies={searchForMovies} />
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {
              movieResults && movieResults.map((result: { id: React.Key | null | undefined }) => (
                  <Thumbnail key={result.id} result={result} />
              ))
          }
      </div>
    </>
  )
}

export default MovieResults