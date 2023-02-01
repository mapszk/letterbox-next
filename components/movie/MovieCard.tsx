import { IMovie } from '@/interfaces/Movie'
import Link from 'next/link'

interface Props {
  movie: IMovie,
  className?: string
}

export default function MovieCard ({ movie, className = '' }: Props) {
  return (
    <Link href={`movie/${movie.slug}`} className={`h-32 sm:h-52 lg:h-72 w-full ${className}`}>
      <img className='rounded-lg object-cover h-full w-full' src={movie.cover} alt={`Movie poster of ${movie.name}`} />
    </Link>
  )
}
