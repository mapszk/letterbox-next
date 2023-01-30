import React, { useState } from 'react'
import HeartIcon from '@heroicons/react/24/solid/HeartIcon.js'
import ReviewIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon.js'
import WatchlistIcon from '@heroicons/react/24/solid/ClockIcon.js'
import { IMovieDetails } from '../../interfaces/Movie'
import { addToWatchlist, dislikeMovie, likeMovie, removeFromWatchlist } from '@/services/movies'

interface Props {
  movie: IMovieDetails,
  className?: string
}

export default function Header ({ movie, className }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(movie.isLiked)
  const [likesCount, setLikesCount] = useState<number>(movie.likes)

  const handleLike = async () => {
    if (isLiked) {
      await dislikeMovie(movie.slug).catch(e => e.response)
      setIsLiked(false)
      setLikesCount(likes => likes - 1)
    } else {
      await likeMovie(movie.slug).catch(e => e.response)
      setIsLiked(true)
      setLikesCount(likes => likes + 1)
    }
  }

  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(movie.isInWatchlist)
  const [watchlistCount, setWatchlistCount] = useState<number>(movie.watchlist)
  const handleWatchlist = async () => {
    if (isInWatchlist) {
      await removeFromWatchlist(movie.slug).catch(e => e.response)
      setIsInWatchlist(false)
      setWatchlistCount(likes => likes - 1)
    } else {
      await addToWatchlist(movie.slug).catch(e => e.response)
      setIsInWatchlist(true)
      setWatchlistCount(likes => likes + 1)
    }
  }

  return (
    <section className={className}>
      <h2 className='text-white font-semibold text-2xl md:text-4xl md:mb-2 '>{movie.name}</h2>
      <h4 className='text-slate-500 font-semibold text-md md:text-2xl md:mb-2'>{movie.releaseYear}</h4>
      <h3 className='text-slate-300 mb-2 md:text-xl'>Directed by {movie.director}</h3>
      <div className='flex flex-row mt-2 md:mt-5'>
        <div className='flex flex-row mr-4 md:mr-6'>
          <button onClick={handleLike}>
            <HeartIcon className={`w-4 md:w-6 ${isLiked ? 'text-red-500' : 'text-sky-900'}`} />
          </button>
          <span className={`${isLiked ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{likesCount}</span>
        </div>
        <div className='flex flex-row mr-4 md:mr-6'>
          <button onClick={handleWatchlist}>
            <WatchlistIcon className={`w-4 md:w-6 ${isInWatchlist ? 'text-red-500' : 'text-sky-900'}`} />
          </button>
          <span className={`${isInWatchlist ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{watchlistCount}</span>
        </div>
        <div className='flex flex-row'>
          <ReviewIcon className='w-4 md:w-6 text-sky-900' />
          <span className='text-sky-900 ml-2 text-bolder'>{movie.reviews}</span>
        </div>
      </div>
    </section>
  )
}
