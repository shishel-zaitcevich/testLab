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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const agreeElement = document.getElementById('agree') as HTMLInputElement
    const formData = {
      name,
      phone,
      agree: agreeElement.checked,
    }
    fetch('https://some-server.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        alert('Form submitted successfully!')
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('There was an error submitting the form')
      })
  }

  return (
    <section className="section__form" id="form">
      <h2 className="block__title">Отправь форму</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__fields">
          <CustomTextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
            helperText="Можно использовать только буквы"
            valid={nameValid}
          />
          <CustomTextField
            label="Phone"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            helperText="Можно использовать только + и цифры"
            valid={phoneValid}
            type="tel"
          />
        </div>
        <div className="agree__submit">
          <div className="form__control">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">Согласен, отказываюсь</label>
          </div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </section>
  )
}
