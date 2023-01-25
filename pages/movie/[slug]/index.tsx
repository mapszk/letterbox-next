import Container from '@/components/Container'
// import { MovieDetails } from '@/interfaces/Movie'
// import { getMovie } from '@/services/movies'
// import { StatusCodes } from 'http-status-codes/build/cjs/status-codes'
// import { GetServerSidePropsContext } from 'next'
// import Header from '@/components/movie/Header'
// import { User } from '@/interfaces/User'

// interface PageProps {
//   movie: MovieDetails,
//   user: User
// }

export default function Movie () {
  return (
    <Container>
      {/* <Header movie={movie} user={user} /> */}
    </Container>
  )
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const slug = context.query.slug as string
//   const user = JSON.parse(context.req.cookies.user as string)
//   const response = await getMovie({ slug, accessToken: user.accessToken }).catch(e => e.response)
//   if (response.status === StatusCodes.OK) {
//     return {
//       props: {
//         movie: response.data,
//         user
//       }
//     }
//   } else if (response.status === StatusCodes.NOT_FOUND) {
//     return {
//       notFound: true
//     }
//   } else {
//     return {
//       redirect: '/'
//     }
//   }
// }
