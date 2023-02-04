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
      <h1 className='text-2xl md:text-4xl font-semibold text-white mb-5'>Latest movies</h1>
      <section className='grid grid-cols-3 lg:grid-cols-6 mt-5 gap-3'>
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
