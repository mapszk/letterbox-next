import Container from '@/components/Container'
import { MovieDetails } from '@/interfaces/Movie'
import { getMovie } from '@/services/movies'
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
import { GetServerSidePropsContext } from 'next'
import Header from '@/components/movie/Header'

interface PageProps {
  movie: MovieDetails
}

export default function Movie ({ movie }: PageProps) {
  return (
    <Container>
      <Header movie={movie} />
    </Container>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const response = await getMovie(ctx.query.slug as string, { headers: { cookie: ctx.req.headers.cookie } })
    .catch(e => e.response)
  if (response.status === StatusCodes.OK) {
    return {
      props: {
        movie: response.data
      }
    }
  }
  return {
    notFound: true
  }
}
