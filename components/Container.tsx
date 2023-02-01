export default function Container ({ children, className = '' }: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`w-11/12 max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  )
}
