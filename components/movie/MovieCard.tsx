import { IMovie } from '@/interfaces/Movie'
import Link from 'next/link'

interface Props {
  movie: IMovie,
  className?: string
}

export default function MovieCard ({ movie }: Props) {
  return (
    <Link href={`movie/${movie.slug}`}>
      <img className='rounded-lg object-cover h-full w-full' src={movie.cover} alt={`Movie poster of ${movie.name}`} />
    </Link>
  )
}
