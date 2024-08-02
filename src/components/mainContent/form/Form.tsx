import * as React from 'react'
import CustomTextField from './TextField'
import { useState } from 'react'

export default function MyForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)
  //   const [checked, setChecked] = useState(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    if (/^[A-Za-zА-Яа-яЁё]+$/.test(value)) {
      setNameValid(true)
      setNameError(false)
    } else {
      setNameValid(false)
      setNameError(value.length > 0)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhone(value)
    if (/^\+?[0-9]*$/.test(value)) {
      setPhoneValid(true)
      setPhoneError(false)
    } else {
      setPhoneValid(false)
      setPhoneError(value.length > 0)
    }
  }

  return (
    <section className="section__form" id="form">
      <h2 className="block__title">Отправить форму</h2>
      <form className="myForm">
        <div className="formFields">
          <CustomTextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
            helperText="Only letters are allowed."
            valid={nameValid}
          />
          <CustomTextField
            label="Phone"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            helperText="Only digits and an optional leading + are allowed."
            valid={phoneValid}
            type="tel"
          />
        </div>
        <div className="agree__submit">
          <div className="form-control">
            <input
              type="checkbox"
              id="agree"
              // checked={checked}
              // onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="agree">Согласен, отказываюсь</label>
          </div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </section>
  )
}
