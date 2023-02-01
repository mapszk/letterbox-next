import Container from '@/components/Container'
import MovieCard from '@/components/movie/MovieCard'
import { IMovie } from '@/interfaces/Movie'
import { IPaginatedList } from '@/interfaces/Paginated'
import { getMoviesPaginated } from '@/services/movies'
import { GetServerSidePropsContext } from 'next'

interface PageProps {
  movies: IPaginatedList<IMovie>
}

export default function Search ({ movies }: PageProps) {
  if (!movies.totalCount) {
    return (
      <Container>
        <section>
          <h2>No results found</h2>
        </section>
      </Container>
    )
  } else {
    return (
      <Container>
        <section className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {movies.data.map(movie => <MovieCard className='h-64 md:h-96' movie={movie} key={movie.id} />)}
        </section>
      </Container>
    )
  }
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(ctx.query)
  const movies = await getMoviesPaginated({ name: ctx.query.name as string }, { headers: { cookie: ctx.req?.headers?.cookie as string } }).catch(e => e.response)
  console.log(movies)
  return {
    props: {
      movies: movies.data
    }
  }
}
