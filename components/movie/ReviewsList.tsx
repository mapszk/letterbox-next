import { IPaginatedList } from '@/interfaces/Paginated'
import { IReview } from '@/interfaces/Reviews'
import { useState } from 'react'
import Button from '../Button'
import Review from './Review'

interface Props {
  paginatedReviews: IPaginatedList<IReview>
}

export default function ReviewsList ({ paginatedReviews }: Props) {
  const [reviews, setReviews] = useState<IReview[]>(paginatedReviews.data)
  const [loading, setLoading] = useState<boolean>(false)
  const showMore = reviews.length < paginatedReviews.totalCount

  return (
    <section className='flex flex-col items-center w-full'>
      {
        reviews.map((review: IReview, index: number) =>
          <Review className={index < reviews.length ? 'mb-2' : ''} review={review} key={review.id} />
        )
      }
      {showMore && <Button className='mt-2 max-w-xs'>Load more</Button>}
    </section>
  )
}
