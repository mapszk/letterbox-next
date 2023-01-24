import Container from '@/components/Container'
import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Container>
      <h2 className='text-white text-4xl'>{slug}</h2>
    </Container>
  )
}
