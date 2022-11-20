import React from 'react'
import Thumbnail from './Thumbnail'

const MovieResults = ({ results }: any) => {
  return (
    <div>
        {
            results.map((result: { id: React.Key | null | undefined }) => (
                <Thumbnail key={result.id} result={result} />
            ))
        }
    </div>
  )
}

export default MovieResults