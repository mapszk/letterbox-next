import Container from '@/components/Container'
import { MovieDetails } from '@/interfaces/Movie'
import { getMovie } from '@/services/movies'
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
import { GetServerSidePropsContext } from 'next'

interface PageProps {
  movie: MovieDetails
}

export default function Index ({ movie }: PageProps) {
  return (
    <Container className='mt-5'>
      <div className='md:hidden'>
        <div className='flex flex-row'>
          <div className='w-32'>
            <img className='rounded-lg mr-2 w-full' src={movie.cover} />
          </div>
          <div className='p-2'>
            <h2 className='text-white font-semibold text-2xl'>{movie.name}</h2>
            <h4 className='text-slate-500 font-semibold text-md'>{movie.releaseYear}</h4>
            <h3 className='text-slate-300 mb-2'>Directed by {movie.director}</h3>
          </div>
        </div>
        <p className='text-slate-300 mt-4'>{movie.description}</p>
      </div>
      <div className='hidden md:block'>
        <div className='flex flex-row'>
          <img className='rounded-lg mr-4 w-64' src={movie.cover} />
          <div className='p-4'>
            <h2 className='text-white font-semibold text-4xl'>{movie.name}</h2>
            <h4 className='text-slate-500 mt-2 font-semibold text-2xl'>{movie.releaseYear}</h4>
            <h3 className='text-slate-300 text-xl mb-2'>Directed by {movie.director}</h3>
            <p className='text-slate-300 mt-4'>{movie.description}</p>
          </div>
        </div>
      </div>
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
        movie: response.data
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
