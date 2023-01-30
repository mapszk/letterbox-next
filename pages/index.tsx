// import { getMovie } from '@/services/movies'
// import { GetServerSidePropsContext } from 'next'

export default function Home () {
  return (
    <h1 className='text-5xl text-white'>Home</h1>
  )
}

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const response = await getMovie('cleo-from-5-to-7', {
//     headers: {
//       cookie: ctx.req.headers.cookie
//     }
//   }).catch(e => e.response)
//   console.log(response.data)
//   return {
//     props: {}
//   }
// }
