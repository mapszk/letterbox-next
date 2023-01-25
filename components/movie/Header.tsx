import React, { useState } from 'react'
import HeartIcon from '@heroicons/react/24/solid/HeartIcon.js'
import ReviewIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon.js'
import WatchlistIcon from '@heroicons/react/24/solid/ClockIcon.js'
import { MovieDetails } from '../../interfaces/Movie'
import { addToWatchlist, dislikeMovie, likeMovie, removeFromWatchlist } from '@/services/movies'
import { User } from '@/interfaces/User'

interface Props {
  movie: MovieDetails,
  user: User
}

export default function Header ({ movie, user }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(movie.isLiked)
  const [likesCount, setLikesCount] = useState<number>(movie.likes)
  const handleLike = async () => {
    if (isLiked) {
      await dislikeMovie({ slug: movie.slug, accessToken: user.accessToken }).catch(e => e.response)
      setIsLiked(false)
      setLikesCount(likes => likes - 1)
    } else {
      await likeMovie({ slug: movie.slug, accessToken: user.accessToken }).catch(e => e.response)
      setIsLiked(true)
      setLikesCount(likes => likes + 1)
    }
  }

  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(movie.isInWatchlist)
  const [watchlistCount, setWatchlistCount] = useState<number>(movie.watchlist)
  const handleWatchlist = async () => {
    if (isInWatchlist) {
      await removeFromWatchlist({ slug: movie.slug, accessToken: user.accessToken }).catch(e => e.response)
      setIsInWatchlist(false)
      setWatchlistCount(likes => likes - 1)
    } else {
      await addToWatchlist({ slug: movie.slug, accessToken: user.accessToken }).catch(e => e.response)
      setIsInWatchlist(true)
      setWatchlistCount(likes => likes + 1)
    }
  }

  return (
    <>
      <section className='md:hidden'>
        <div className='flex flex-row'>
          <div className='w-32'>
            <img className='rounded-lg mr-4 w-full' src={movie.cover} />
          </div>
          <div className='p-4'>
            <h2 className='text-white font-semibold text-2xl'>{movie.name}</h2>
            <h4 className='text-slate-500 font-semibold text-md'>{movie.releaseYear}</h4>
            <h3 className='text-slate-300 mb-2'>Directed by {movie.director}</h3>
            <div className='flex flex-row mt-2'>
              <div className='flex flex-row mr-4'>
                <button onClick={handleLike}>
                  <HeartIcon className={`w-4 ${isLiked ? 'text-red-500' : 'text-sky-900'}`} />
                </button>
                <span className={`${isLiked ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{likesCount}</span>
              </div>
              <div className='flex flex-row mr-4'>
                <button onClick={handleWatchlist}>
                  <WatchlistIcon className={`w-4 ${isInWatchlist ? 'text-red-500' : 'text-sky-900'}`} />
                </button>
                <span className={`${isInWatchlist ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{watchlistCount}</span>
              </div>
              <div className='flex flex-row'>
                <ReviewIcon className='w-4 text-sky-900' />
                <span className='text-sky-900 ml-2 text-bolder'>{movie.reviews}</span>
              </div>
            </div>
          </div>
        </div>
        <p className='text-slate-300 mt-4'>{movie.description}</p>
      </section>
      <section className='hidden md:block'>
        <div className='flex flex-row'>
          <img className='rounded-lg mr-4 w-64' src={movie.cover} />
          <div className='p-4'>
            <h2 className='text-white mb-2 font-semibold text-4xl'>{movie.name}</h2>
            <h4 className='text-slate-500 mb-2 font-semibold text-2xl'>{movie.releaseYear}</h4>
            <h3 className='text-slate-300 text-xl mb-2'>Directed by {movie.director}</h3>
            <p className='text-slate-300 mt-4'>{movie.description}</p>
            <div className='flex flex-row mt-5'>
              <div className='flex flex-row mr-6'>
                <button onClick={handleLike}>
                  <HeartIcon className={`w-6 ${isLiked ? 'text-red-500' : 'text-sky-900'}`} />
                </button>
                <span className={`${isLiked ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{likesCount}</span>
              </div>
              <div className='flex flex-row mr-6'>
                <button onClick={handleWatchlist}>
                  <WatchlistIcon className={`w-6 ${isInWatchlist ? 'text-red-500' : 'text-sky-900'}`} />
                </button>
                <span className={`${isInWatchlist ? 'text-sky-100' : 'text-sky-900'} ml-2 text-bolder`}>{watchlistCount}</span>
              </div>
              <div className='flex flex-row'>
                <ReviewIcon className='w-6 text-sky-900' />
                <span className='text-sky-900 ml-2 text-bolder'>{movie.reviews}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
