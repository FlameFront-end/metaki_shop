import React, { useState } from 'react'
import axios from 'axios'

const EmailForm = () => {
  const URL_BACK = process.env.REACT_APP_API_URL
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL_BACK}/mail`, { message })

      if (response.status === 200) {
        console.log('Письмо отправлено успешно')
      } else {
        console.error('Ошибка отправки письма')
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Введите сообщение" />
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  )
}

export default EmailForm