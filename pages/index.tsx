import { GetServerSidePropsContext } from 'next'
// import styles from '@/styles/home.module.css'
import Container from '@/components/Container'
import { getHomeMovies } from '@/services/movies'
import { IPaginatedList } from '@/interfaces/Paginated'
import { IMovie } from '@/interfaces/Movie'
import MovieCard from '@/components/movie/MovieCard'

interface PageProps {
  movies: IPaginatedList<IMovie>
}

export default function Home ({ movies }: PageProps) {
  return (
    <Container>
      <h1 className='text-4xl font-semibold text-white mb-5'>Latest movies</h1>
      <section className='sm:hidden'>
        <MovieCard movie={movies.data[0]} />
        <div className='flex flex-row gap-2 mt-4'>
          {movies.data.slice(1).map(movie => <MovieCard className='h-24' movie={movie} key={movie.id} />)}
        </div>
      </section>
      <section className='hidden sm:flex flex-row mt-5 gap-4'>
        {movies.data.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </section>
    </Container>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const movies = await getHomeMovies({ headers: { cookie: ctx.req?.headers?.cookie } }).catch(e => e.response)

  return {
    props: {
      movies: movies.data
    }
  }
}
