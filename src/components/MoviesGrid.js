import React from 'react'
import Image from 'next/image';
import BtnFav from '@/components/BtnFav';
import Link from 'next/link'



export const MoviesGrid = ({movies}) => {

   const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';
   const firstMovie = movies.slice(1,5);
 

   const handleMovieClick= (moviePosition) => {
    setFeaturedMovie(movie[moviePosition])

   }
  return (
    <div className='movies movies w-full flex flex-wrap justify-center items-start gap-10 pt-15 bg-black'>
                {movies.map((movie,index) => (
                    
                    <div key={movie.id} className='w-[225px] m-5 col-span-4 min-h-20  '>
                        <div onClick={() => handleMovieClick(index)}>
                        <Link href={`/movie/${movie.id}`}></Link>
                        <Image
                          src={`${IMAGE_BASE}${movie.poster_path}`}
                          alt={movie.title}
                          width={225}
                          height={100}
                          />                    
                       </div>
                       <h3 className='mt-2 ml-3 break-words text-[18px] font-semibold text-white'>{movie.title}</h3>
                          <BtnFav />
                        </div>
                    ))}
        </div>
                     
                      
  )
}

export default MoviesGrid
