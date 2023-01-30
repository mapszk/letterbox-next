import { IPaginatedList } from '@/interfaces/Paginated'
import { IReview } from '@/interfaces/Reviews'
import { getReviews } from '@/services/reviews'
import { StatusCodes } from 'http-status-codes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Button from '../Button'
import Review from './Review'

interface Props {
  paginatedReviews: IPaginatedList<IReview>,
  className?: string
}

export default function ReviewsList ({ paginatedReviews, className }: Props) {
  const router = useRouter()
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [reviews, setReviews] = useState<IReview[]>(paginatedReviews.data)
  const [loading, setLoading] = useState<boolean>(false)

  const incrementPageNumber = () => setPageNumber(pNumber => pNumber + 1)

  const loadMore = async () => {
    if (pageNumber === 0) return
    setLoading(true)
    const response = await getReviews({ pageNumber, pageSize: 5, movieSlug: router.query.slug as string })
      .catch(e => e.response)
    if (response.status === StatusCodes.OK) {
      const data : IPaginatedList<IReview> = response.data
      setReviews(reviews => [...reviews, ...data.data])
    }
    setLoading(false)
  }

  useEffect(() => {
    loadMore()
  }, [pageNumber])

  return (
    <section className={`flex flex-col w-full ${className}`}>
      {reviews.map((review: IReview, index: number) =>
        <Review className={index < reviews.length ? 'mb-2' : ''} review={review} key={review.id} />
      )}
      {reviews.length < paginatedReviews.totalCount && <Button onClick={incrementPageNumber} loading={loading} className='mt-2 ml-auto md:w-32'>Load more</Button>}
    </section>
  )
}
