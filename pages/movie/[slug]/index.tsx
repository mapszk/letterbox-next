import Container from '@/components/Container'
import { MovieDetails } from '@/interfaces/Movie'
import { getMovie } from '@/services/movies'
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
import { GetServerSidePropsContext } from 'next'
import Header from '@/components/movie/Header'

interface PageProps {
  movie: MovieDetails,
  accessToken: string
}

export default function Index ({ movie, accessToken }: PageProps) {
  return (
    <Container className='mt-5'>
      <Header movie={movie} accessToken={accessToken} />
    </Container>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const slug = context.query.slug as string
  const { accessToken } = context.req.cookies
  const response = await getMovie({ slug, accessToken }).catch(e => e.response)
  if (response.status === StatusCodes.OK) {
    return {
      props: {
        movie: response.data,
        accessToken
      }
    }
  } else if (response.status === StatusCodes.NOT_FOUND) {
    return {
      notFound: true
    }
  } else {
    return {
      redirect: '/'
    }
  }
}
