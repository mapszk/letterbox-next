interface Props {
  secondary?: boolean,
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined,
  loading?: boolean,
  onClick?: () => void,
}

export default function Button ({ secondary, children, className, type, loading, onClick }: Props) {
  const loadingStyles : string = 'opacity-50 cursor-not-allowed'
  const buttonPrimaryStyles : string = `
    rounded-md bg-sky-600 w-full py-2 border-b border-l border-r border-sky-500
    text-white font-bold shadow-md shadow-sky-900 hover:translate-y-0.5
    ease-in-out duration-300 ${className} ${loading && loadingStyles}
  `
  const buttonSecondaryStyles : string = `
  rounded-md bg-slate-100 w-full py-2 border-b border-l border-r border-sky-900
  text-black font-bold shadow-md shadow-sky-900 hover:translate-y-0.5
  ease-in-out duration-300 ${className} ${loading && loadingStyles}
  `

  const handleClick = () => {
    if (!loading && onClick) onClick()
  }

  return (
    <button type={type} onClick={handleClick} className={secondary ? buttonSecondaryStyles : buttonPrimaryStyles}>
      {children}
    </button>
  )
}
