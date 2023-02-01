import { addReview } from '@/services/movies'
import { StatusCodes } from 'http-status-codes'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../Button'

export default function CreateReview () {
  const router = useRouter()
  const [review, setReview] = useState<string>('')
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value)

  const [loading, setLoading] = useState<boolean>(false)
  const postReview = async () => {
    setLoading(true)
    const response = await addReview({ slug: router.query.slug as string, content: review })
      .catch(e => e.response)
    if (response.status === StatusCodes.OK) setReview('')
    setLoading(false)
  }

  return (
    <div className='flex flex-col w-full'>
      <textarea
        onChange={handleChange}
        value={review}
        className='w-full rounded-lg bg-slate-800 outline-none p-2 text-white resize-none'
        placeholder='Write your review...'
        name='review'
        id='review'
        cols={30}
        rows={4}
      />
      <Button loading={loading} onClick={postReview} className='md:w-32 ml-auto mt-2'>Post</Button>
    </div>
  )
}
