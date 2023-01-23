interface Props {
  secondary?: boolean,
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default function Button ({ secondary, children, className, type }: Props) {
  const buttonPrimaryStyles : string = `
    rounded-md bg-sky-600 w-full py-2 border-b border-l border-r border-sky-500
    text-white font-bold shadow-md shadow-sky-900 hover:translate-y-0.5
    ease-in-out duration-300 ${className}
  `
  const buttonSecondaryStyles : string = `
  rounded-md bg-slate-100 w-full py-2 border-b border-l border-r border-sky-900
  text-black font-bold shadow-md shadow-sky-900 hover:translate-y-0.5
  ease-in-out duration-300 ${className}
`
  return (
    <button type={type} className={secondary ? buttonSecondaryStyles : buttonPrimaryStyles}>
      {children}
    </button>
  )
}
