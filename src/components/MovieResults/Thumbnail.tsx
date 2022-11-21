import Image from 'next/image'

import { 
  HandThumbUpIcon,
  HandThumbDownIcon
} from '@heroicons/react/24/outline'

const Thumbnail = ({result}: any) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    
    return (
        <div className="p-2 group cursor-pointer transition duration-200 ease-in trasnform sm:hover:scale-105 hover:z-500">
            <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                height={1080}
                width={1920}
                alt={result.original_title}
            />
            <div className="p-2">
                <p className="truncate max-w-md group-hover:text-clip">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} *`}{" "}
                    {result.release_date || `${result.first_air_date} *`}{" "}
                    <button className="hover:text-orange"><HandThumbUpIcon className="h-5 mx-2" /></button>
                    {result.vote_count}
                    <button className="hover:text-orange"><HandThumbDownIcon className="h-5 mx-2" /></button>
                </p>
            </div>
        </div>
    )
}

export default Thumbnail