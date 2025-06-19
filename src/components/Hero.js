'use client'

import Image from 'next/image';
import React, { useState } from 'react';

export const Hero = ({ movies }) => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';
  const firstMovie = movies.slice(0, 4);

  const handleMovieClick = (moviePosition) => {
    setFeaturedMovie(movies[moviePosition]);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${IMAGE_BASE}/${featuredMovie.backdrop_path})`,
      }}
      className="mx-[50px] my-[50px] h-[600px] bg-cover bg-no-repeat bg-center shadow-2xl"
    >
      <div className="h-full flex flex-col justify-center items-start px-[72px] bg-black/70">
        <div className="content text-white">
          <h2 className="text-5xl mb-10 mt-10 font-bold">{featuredMovie.title}</h2>
          <p className="max-w-[450px]">{featuredMovie.overview}</p>
        </div>

        <div className="movies w-full flex flex-wrap justify-start items-center gap-10 mt-10">
          {firstMovie.map((movie, index) => (
            <div key={movie.id} className="col-span-4 cursor-pointer" onClick={() => handleMovieClick(index)}>
              <Image
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title}
                width={125}
                height={75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

