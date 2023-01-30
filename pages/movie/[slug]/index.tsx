import Container from '@/components/Container'
import { IMovieDetails } from '@/interfaces/Movie'
import { getMovie } from '@/services/movies'
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
import { GetServerSidePropsContext } from 'next'
import MovieDetails from '@/components/movie/MovieDetails'
import { getReviews } from '@/services/reviews'
import { IPaginatedList } from '@/interfaces/Paginated'
import { IReview } from '@/interfaces/Reviews'
import ReviewsList from '@/components/movie/ReviewsList'
import CreateReview from '@/components/movie/CreateReview'

interface PageProps {
  movie: IMovieDetails,
  reviews: IPaginatedList<IReview>
}

export default function Movie ({ movie, reviews }: PageProps) {
  return (
    <Container>
      <div className='md:hidden mb-5'>
        <div className='flex flex-row'>
          <img className='w-24 self-start rounded-lg mr-2' src={movie.cover} alt={`Movie poster of ${movie.name}`} />
          <MovieDetails className='p-2' movie={movie} />
        </div>
        <p className='text-slate-200 mt-5 mb-5'>{movie.description}</p>
        <h2 className='text-white font-semibold text-slate-500 text-xl mb-2 mt-4'>Reviews</h2>
        <CreateReview />
        <ReviewsList className='mt-4' paginatedReviews={reviews} />
      </div>

      <div className='hidden md:flex flex-row'>
        <img className='w-56 self-start rounded-lg mr-2' src={movie.cover} alt={`Movie poster of ${movie.name}`} />
        <section className='p-4'>
          <MovieDetails movie={movie} />
          <p className='text-slate-200 mt-5 mb-5'>{movie.description}</p>
          <h2 className='text-white font-semibold text-slate-500 text-xl mb-2 mt-4'>Reviews</h2>
          <CreateReview />
          <ReviewsList className='mt-4' paginatedReviews={reviews} />
        </section>
      </div>
    </Container>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const movie = await getMovie(ctx.query.slug as string, { headers: { cookie: ctx.req.headers.cookie } })
    .catch(e => e.response)
  if (movie.status === StatusCodes.NOT_FOUND) {
    return {
      notFound: true
    }
  }

  const reviews = await getReviews(
    { movieSlug: movie.data.slug },
    { headers: { cookie: ctx.req.headers.cookie } }
  ).catch(e => e.response)

  return {
    props: {
      movie: movie.data,
      reviews: reviews.data
    }
  }
}
