import '../../../styles/form.scss'
import * as React from 'react'
import { useEffect, useState } from 'react'

interface CustomTextFieldProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: boolean
  helperText: string
  valid: boolean
  type?: string
}

export default function CustomTextField({
  label,
  value,
  onChange,
  error,
  helperText,
  valid,
  type = 'text',
}: CustomTextFieldProps) {
  const [focused, setFocused] = useState(false)
  const [filled, setFilled] = useState(value.length > 0)

  useEffect(() => {
    setFilled(value.length > 0)
  }, [value])

  return (
    <div className="text__field">
      <div
        className={`input__container ${focused ? 'focused' : ''} ${error ? 'error' : ''} ${filled ? 'filled' : ''}`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
        <label className={value ? 'shrink' : ''}>{label}</label>
        {valid && <span className="valid__icon">✔</span>}
        {error && !valid && <span className="invalid__icon">✖</span>}
      </div>
      {error && helperText && (
        <div className="helper__text error">{helperText}</div>
      )}
    </div>
  )
}
