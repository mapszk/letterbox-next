import { IReview } from '@/interfaces/Reviews'

interface Props {
  review: IReview,
  className?: string
}

export default function Review ({ review, className }: Props) {
  const profileAvatar = review.userInfo.avatar || '/avatar_placeholder.png'
  const formatedDate = new Date(review.createdAt).toLocaleDateString('en-US')

  return (
    <article className={`w-full flex flex-row p-3 rounded-md hover:bg-slate-800 ${className}`}>
      <img className='rounded-full w-8 h-8 md:w-12 md:h-12 mr-4' src={profileAvatar} alt='User profile picture' />
      <div>
        <span className='flex flex-row items-center mb-1'>
          <h3 className='font-semibold text-sky-500 text-lg'>{review.userInfo.userName}</h3>
          <h5 className='text-slate-400 text-sm ml-2'>{formatedDate}</h5>
        </span>
        <p className='text-sm text-white'>{review.content}</p>
      </div>
    </article>
  )
}
