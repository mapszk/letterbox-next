export default function Container ({ children }: {children: React.ReactNode}) {
  return (
    <div className='w-11/12 max-w-5xl mx-auto'>
      {children}
    </div>
  )
}
