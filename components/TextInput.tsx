interface Props {
  value: string,
  onChange: Function,
  placeholder?: string,
  className?: string
  label?: string
  id?: string,
  name?: string,
  password?: boolean | undefined
}

export default function TextInput ({ id, name, value, placeholder, onChange, className, label, password }: Props) {
  return (
    <div className='w-full flex flex-col'>
      {label && <label className='mb-1 text-white'>{label}</label>}
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        className={`rounded-md w-full px-3 py-2 ${className}`}
        value={value}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => onChange(evt.target.value)}
      />
    </div>
  )
}
