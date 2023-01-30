import Container from '@/components/Container'
import { IMovieDetails } from '@/interfaces/Movie'
import { getMovie } from '@/services/movies'
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
import { GetServerSidePropsContext } from 'next'
import Header from '@/components/movie/Header'
import { getReviews } from '@/services/reviews'
import { IPaginatedList } from '@/interfaces/Paginated'
import { IReview } from '@/interfaces/Reviews'
import ReviewsList from '@/components/movie/ReviewsList'

interface PageProps {
  movie: IMovieDetails,
  reviews: IPaginatedList<IReview>
}

export default function Movie ({ movie, reviews }: PageProps) {
  return (
    <Container>
      <Header movie={movie} />
      <ReviewsList paginatedReviews={reviews} />
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
